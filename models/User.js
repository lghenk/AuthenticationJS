var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  "2fa": {
        enabled: Boolean,
        type: {type: String, enum: ["Email", "Authenticator"], default: "Authenticator"},
        secret: String
  },
  status: {type: String, enum: ["Enabled", "Unverified", "Disabled"], default: "Unverified"},
  created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema);