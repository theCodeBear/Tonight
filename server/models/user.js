'use strict';

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: mongoose.Schema.ObjectId, ref: 'Date' },
  bio: { type: String, required: true },
  picture: { type: String, required: true },
  interests: { type: [String], required: true },
  phone: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);