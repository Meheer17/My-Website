module.exports = function(app) {
    
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
    
}