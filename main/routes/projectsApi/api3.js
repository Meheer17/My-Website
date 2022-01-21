const dns = require('dns');
const mongoose = require('mongoose');
const urlparser = require('url')

const schema = mongoose.Schema({url : 'string'});
const Url = mongoose.model('url', schema);

module.exports = function(app) {

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
    
}