'use strict';

var User = require('../../models/user');

module.exports = {
  handler: function(request, reply) {
    var user = new User(request.payload);
    user.save(function(err) {
      if (err) {
        console.log('ERROR ON SERVER SAVING USER TO DB');
        reply().code(500);
      } else {
        reply.redirect('/users');
      }
    });
  }
};