'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  auth: false,
  validate: {
    payload: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(3).required(),
      bio: Joi.string().required(),
      picture: Joi.string().uri().required(),
      interests: Joi.string().required(),
      phone: Joi.string().length(10).required()
    }
  },
  handler: function(request, reply) {
    User.register(request.payload, function(err) {
      if (err) {
        reply().code(400);
      } else {
        reply();
      }
    });
  }
};