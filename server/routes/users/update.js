'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  handler: function(request, reply) {
    console.log('payload:', request.payload);
    console.log('params:', request.params);
    User.update({payload: request.payload, id: request.params.userId }, function(err, user) {
      if (!user) { return reply().code(517); }
      reply({user: user}).code(200);
    });
  }
};
