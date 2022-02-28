const Comment = require('./model.js').Comments;

module.exports = function(app) {  

    app.route('/datastore')
    .post((req,res) => {
        const un = req.user.username
        const su = req.body.subject
        const com = req.body.comment
        if (!un || !su || !com) {
            res.send(console.log("Fields missing, Please fill them up"))
        } 
        const newCom = new Comment({username: un, topic: su,comment: com})
        newCom.save((err, data) => {
            if(err || !data) {
                res.send("Error")
            } else {
                res.redirect('/comments')
            }
        });
    })  
        
    .get(function (req, res){

      Comment.find({}, (err, data) => {
          if(!data){
              res.json([])
          } else {
              const formatData = data.map((book) => {
                  return{
                      username: book.username,
                      topic: book.topic,
                      comment: book.comment
                  };
              });
        //    const rev = formatData.reverse()
        //    res.json(rev)                                 // this is for the reverese json from bottom to top
              res.json(formatData)
          }
      });
    })    
    
}