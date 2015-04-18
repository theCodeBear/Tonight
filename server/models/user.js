'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User;

var userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dateStory: { type: mongoose.Schema.ObjectId, ref: 'Date' },
  bio: { type: String, required: true },
  picture: { type: String, required: true },
  interests: { type: [String], required: true },
  phone: { type: String, required: true }
});


userSchema.statics.register = function(payload, cb) {
  User.findOne({ email: payload.email }, function(err, user) {
    if (user) { return cb(true); }
    user = new User(payload);
    user.password = bcrypt.hashSync(payload.password, 8);
    user.save(cb);
  });
};

userSchema.statics.login = function(payload, cb) {
  User.findOne({ email: payload.email }, function(err, user) {
    if (err) { return cb(true); }
    var isGood = bcrypt.compareSynce(payload.password, user.password);
    if (!isGood) { return cb(true); }
    cb(null, user);
  });
};



User = mongoose.model('User', userSchema);
module.exports = User;