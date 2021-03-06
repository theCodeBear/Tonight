'use strict';

var Hapi = require('hapi');
var routes = require('./config/routes');
var plugins = require('./config/plugins');
var authentication = require('./config/authentication');
var mongoose = require('mongoose');

var server = new Hapi.Server();

server.connection({port: process.env.PORT});
mongoose.connect(process.env.MONGO_URL);

mongoose.connection.once('open', function() {
  server.register(plugins, function() {
    server.auth.strategy('session', 'cookie', true, authentication);
    server.route(routes);
    server.start(function() {
      console.log('info', server.info.uri);
      console.log('info', process.env.MONGO_URL);
    });
  });
});
