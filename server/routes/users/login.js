'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  auth: {
    mode: 'try'
  },
  validate: {
    payload: {
      email: Joi.string().email(),
      password: Joi.string().min(3)
    }
  },
  handler: function(request, reply) {
    console.log('payload:',request.payload);
    User.login(request.payload, function(err, user) {
      if (err) {
        reply({user: false});
      } else {
        request.auth.session.set(user);
        reply({user: user}).code(200);
      }
    });
  }
};