'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  auth: {
    mode: 'try'
  },
  // validate: {
  //   payload: {
  //     name: Joi.string().required(),
  //     email: Joi.string().email(),
  //     password: Joi.string().min(3),
  //     bio: Joi.string().required(),
  //     picture: Joi.string().uri(),
  //     interests: Joi.string().required(),
  //     phone: Joi.string().length(10)
  //   }
  // },
  handler: function(request, reply) {
    console.log('server create router payload:', request.payload);
    User.register(request.payload, function(err, user) {
      if (err) {
        reply().code(500);
      } else {
        request.auth.session.set(user);
        reply({user: user}).code(200);
      }
    });
  }
};