module.exports = function(app) {
    
    app.get('/', (req, res) => {
      res.sendFile(process.cwd() + '/views/index.html');
    });
    
    app.get('/projects', (req, res) => {
      res.sendFile(process.cwd() + '/views/projects.html');
    });
    
    app.get('/certificates', (req, res) => {
      res.sendFile(process.cwd() + '/views/certificate.html');
    });

    app.get('/login', (req, res) => {
        res.sendFile(process.cwd() + '/views/login.html');
    });

    app.get('/sign-up', (req,res) => {
        res.sendFile(process.cwd() + "/views/sign.html");
    });

    app.get('/comments', (req, res) => {
        res.sendFile(process.cwd() + "/views/comments.html")    
    });
    
}