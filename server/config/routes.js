'use strict';

module.exports = [
  { method: 'get', path: '/{param*}', config: require('../routes/general/static') },

  { method: 'post', path: '/login', config: require('../routes/users/login') },
  { method: 'post', path: '/users', config: require('../routes/users/create') },
  { method: 'post', path: '/users/{userId}', config: require('../routes/users/update') }
];
