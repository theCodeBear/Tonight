'use strict';

var User = require('../../models/user');

module.exports = {
  handler: function(request, reply) {
    User.find({}, function(err, data) {
      if (err) {
        console.log('ERROR GETTING ALL USERS FROM DB');
        reply().code(500);
      } else {
        reply(data);
      }
    });
  }
};