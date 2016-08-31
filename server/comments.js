var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CommentSchema   = new Schema({
    username: String,
    comment: String
});

module.exports = mongoose.model('Comments', CommentSchema);