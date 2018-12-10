var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nonceSchema = new Schema({
    userId: mongoose.Types.ObjectId,
    token: String
});

module.exports = mongoose.model('User', userSchema);