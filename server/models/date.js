'use strict';

var mongoose = require('mongoose');

var dateSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  pics: { type: [String], required: true },
  story: { type: String, required: true },
  day: { type: Date, required: true },
  suitors: { type: [mongoose.Schema.ObjectId], ref: 'User' },
  match: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Date', dateSchema);