module.exports = function(app) {
    app.get("/projects/api/2/whoami", function (req, res) {
      res.json({ipaddress : req.connection.remoteAddress, language: req.headers["accept-language"], software: req.headers["user-agent"]});
    });

}