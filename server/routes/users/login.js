'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  auth: {
    mode: 'try'
  },
  validate: {
    payload: {
      email: Joi.string().email().required(),
      password: Joi.string().min(3).required()
    }
  },
  handler: function(request, reply) {
    User.login(request.payload, function(err, user) {
      if (err) {
        reply().code(500);
      } else {
        request.auth.session.set(user);
        reply({user: user}).code(200);
      }
    });
  }
};