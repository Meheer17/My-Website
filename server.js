// ALL CONST
const express = require('express');
const path = require('path');
var cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dns = require('dns');
const multer = require('multer')
const urlparser = require('url')
const chai = require('chai')


const app = express();

app.use(cors({optionsSuccessStatus: 200}));
app.use(bodyParser.urlencoded({extended: false}));

//SCHEMAS
const schema = mongoose.Schema({url : 'string'});
const Url = mongoose.model('url', schema);


//  MONGOOSE CONNECTION
mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true });


// BASIC
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/projects', (req, res) => {
  res.sendFile(process.cwd() + '/views/projects.html');
});

app.get('/certificates', (req, res) => {
  res.sendFile(process.cwd() + '/views/certificate.html');
});



//              folder 1
app.get('/projects/tribute-page', (req, res) => {
  res.sendFile(process.cwd() + '/views/1/1.html');
});
app.get('/projects/survey-form', (req, res) => {
  res.sendFile(process.cwd() + '/views/1/2.html');
});
app.get('/projects/online-shop', (req, res) => {
  res.sendFile(process.cwd() + '/views/1/3.html');
});
app.get('/projects/document', (req, res) => {
  res.sendFile(process.cwd() + '/views/1/4.html');
});
app.get('/projects/profile-1', (req, res) => {
  res.sendFile(process.cwd() + '/views/1/5.html');
});

//              folder 2
app.get('/projects/random-quote-machine', (req, res) => {
  res.sendFile(process.cwd() + '/views/2/1.html');
});
app.get('/projects/markeddown', (req, res) => {
  res.sendFile(process.cwd() + '/views/2/2.html');
});
app.get('/projects/drum-machine', (req, res) => {
  res.sendFile(process.cwd() + '/views/2/3.html');
});
app.get('/projects/calculator', (req, res) => {
  res.sendFile(process.cwd() + '/views/2/4.html');
});
app.get('/projects/pomodoro-clock', (req, res) => {
  res.sendFile(process.cwd() + '/views/2/5.html');
});

//              folder 3
app.get('/projects/timestamp-microservice', (req, res) => {
  res.sendFile(process.cwd() + '/views/3/1.html');
});
app.get('/projects/head-parser', (req, res) => {
  res.sendFile(process.cwd() + '/views/3/2.html');
});
app.get('/projects/url-shortner', (req, res) => {
  res.sendFile(process.cwd() + '/views/3/3.html');
});
app.get('/projects/file-metadata', (req, res) => {
  res.sendFile(process.cwd() + '/views/3/4.html');
});
app.get('/projects/excercise-tracker', (req, res) => {
  res.sendFile(process.cwd() + '/views/3/5.html');
});


//              folder 5
app.get('/projects/temp-convert', (req, res) => {
  res.sendFile(process.cwd() + '/views/5/1.html');
});
app.get('/projects/tribe-web', (req, res) => {
  res.sendFile(process.cwd() + '/views/5/2.html');
});
app.get('/projects/all-react', (req, res) => {
  res.sendFile(process.cwd() + '/views/5/3.html');
});

//              1 TAB
app.get("/projects/api/1/:input", (req, res) => {
        let input = req.params.input
        if(input.match(/\d{5,}/)){
                input = +input;
        }
        let date = new Date(input);

        if(date.toUTCString() == "Invalid Date"){
                res.json({error: date.toUTCString()})
        }
        res.json({ unix : date.valueOf(), utc : date.toUTCString()} )
});
app.get('/projects/api', (req, res) => {
        let date = new Date()
        res.json({unix : date.valueOf(), utc : date.toUTCString()} )
});

//              2 TAB
app.get("/projects/api/2/whoami", function (req, res) {
  res.json({ipaddress : req.connection.remoteAddress, language: req.headers["accept-language"], software: req.headers["user-agent"]});
});



//              3 TAB 
app.post('/projects/api/3/shorturl', function(req, res) {
        const burl = req.body.url
        
        const sm = dns.lookup(urlparser.parse(burl).hostname,
        (error, address) => {
                if(!address){
                        res.json({error: "invalid url"})
                } else {
                        const url = new Url({url: burl})
                        url.save((err, data) => {
                               res.json({
                                original_url : data.url,
                                short_url : data.id
                               })
                        })
                }
        })
});

app.get("/projects/api/3/shorturl/:id", (req,res) => {
        const id = req.params.id;
        Url.findById(id, (err, data) => {
                if(!data){
                        res.json({error: "invalid url" })
                } else {
                        res.redirect(data.url)
                }
        })
})


//          4 TAB 
var upload = multer({dest: 'uploads/'})
app.post("/api/4/fileanalyse", upload.single('upfile'), (req, res) => {
        res.json({
                "name": req.file.originalname,
                "type": req.file.mimetype,
                "size": req.file.size
        })
})

//          5 TAB



app.listen(function() {
  console.log('server started 3000')
});