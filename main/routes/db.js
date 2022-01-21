const mongoose = require('mongoose')
const db = mongoose.connect(process.env.URI, {
    useUnifiedTopology: true,
    useNewUrlParser:true
});
module.exports = db;