const multer = require('multer')


module.exports = function(app) {
    
    var upload = multer({dest: 'uploads/'})
    app.post("/api/4/fileanalyse", upload.single('upfile'), (req, res) => {
            res.json({
                    "name": req.file.originalname,
                    "type": req.file.mimetype,
                    "size": req.file.size
            })
    })
    
}