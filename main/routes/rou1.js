module.exports = function(app) {
    
    app.get('/', (req, res) => {
      res.render('pug/index');
    });
    
    app.get('/projects', (req, res) => {
      res.render('pug/projects');
    });
    
    app.get('/certificates', (req, res) => {
      res.render('pug/certificate');
    });

    app.get('/login', (req, res) => {
        res.render('pug/login');
    });

    app.get('/sign-up', (req,res) => {
        res.render("pug/sign");
    });

    app.get('/comments', (req, res) => {
        res.render("pug/comments")    
    });
    
}