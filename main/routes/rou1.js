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

}