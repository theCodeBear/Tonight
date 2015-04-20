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
  pictureLeft: { type: String },
  pictureCenter: { type: String, required: true },
  pictureRight: { type: String },
  interests: { type: [String], required: true },
  phone: { type: String, required: true }
});


userSchema.statics.register = function(payload, cb) {
  console.log('server model register payload:', payload);
  User.findOne({ email: payload.email }, function(err, user) {
    if (user) { return cb(true); }
    user = new User(payload);
    user.password = bcrypt.hashSync(payload.password, 8);
    user.save(cb(false, user));
  });
};

userSchema.statics.login = function(payload, cb) {
  console.log('server user model payload:', payload);
  User.findOne({ email: payload.email }, function(err, user) {
    console.log('err:', err);
    console.log('user:', user);
    if (!user) { return cb(true); }
    var isGood = bcrypt.compareSync(payload.password, user.password);
    if (!isGood) { return cb(true); }
    cb(null, user);
  });
};

userSchema.statics.update = function(payload, cb) {
  console.log('in server model update method', payload);
  User.findByIdAndUpdate(payload.id, payload.payload, function(err, user) {
    if (err) {
      cb(true);
    } else {
      console.log('updated correctly');
      cb(null, user);
    }

  });
};



User = mongoose.model('User', userSchema);
module.exports = User;