const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const ObjectID = require('mongodb').ObjectID;
const myDB = require('../connection.js');

module.exports = function(app) {
    
    app.use(session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
    //   store: store,
      cookie: { secure: false },
      key: 'express.sid'
    }));
    
    app.use(passport.initialize());
    app.use(passport.session());

    myDB(async (client) => {
      const adn = await client.db('WEB').collection('LS');
    
      app.route('/login').post(passport.authenticate('local', 
        { failureRedirect: "/sign-up"}), (req, res) => {
        res.redirect('/add-comments');
      });
    
        app.route('/add-comments').get(ensureAuthenticated, (req,res) => {
            res.render("pug/com", {user: req.user.username})
        })
    
      app.route('/logout').get((req, res) => {
        req.logout();
        res.render('pug/index', {show:true});
      });
        
      app.route('/register').post(
        (req, res, next) => {
          const hash = bcrypt.hashSync(req.body.password, 12);
          adn.findOne({ username: req.body.username }, function (err, user) {
            if (err) {
              next(err);
            } else if (user) {
              res.render('pug/login', {error: "Username already exists"});
            } else {
              adn.insertOne({ username: req.body.username, password: hash }, (err, doc) => {
                if (err) {
                  res.render('pug/sign-up', {error: "There was an error"});
                } else {
                  next();
                }
              });
            }
          });
        },
        passport.authenticate('local', { failureRedirect: '/' }),
        (req, res, next) => {
          res.redirect('/add-comments');
        }
      );
      
        passport.serializeUser((user, done) => {
            done(null, user._id);
        });
    
        passport.deserializeUser((id, done) => {
            adn.findOne({ _id: new ObjectID(id) }, (err, doc) => {
                done(null, doc);
            });
        });   
    
        passport.use(new LocalStrategy(
            (username, password, done) => {
                adn.findOne({username: username}, (err, user) => {
                    console.log("User " + username + " attempted to login");
                    if (err) {return done(err); }
                    if (!user) {return done(null, false);}
                    if (!bcrypt.compareSync(password, user.password)) {return done(null, false);}
                    return done(null, user)
                });
            }
        ));
    
    
    }).catch((e) => {
      app.route('/').get((req, res) => {
        res.redirect('/');
      });
    });
    
    function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      res.redirect('/sign-up');
    }
    
}    