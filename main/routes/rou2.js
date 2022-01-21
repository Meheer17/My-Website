module.exports = function(app) {
    
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

}