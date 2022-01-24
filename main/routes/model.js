const mongoose = require('mongoose');
const {Schema} = mongoose;

const commentSchema = new Schema({
    username: String,
    topic: String,
    comment: String
});
const comments = mongoose.model("comments", commentSchema);

exports.Comments = comments;