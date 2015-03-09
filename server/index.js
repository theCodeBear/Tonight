'use strict';

var Hapi = require('hapi');
var routes = require('./config/routes');
var views = require('./config/views');
var plugins = require('./config/plugins');
var mongoose = require('mongoose');

var server = new Hapi.Server();

server.connection({port: process.env.PORT});
mongoose.connect(process.env.MONGO_URL);

mongoose.connection.once('open', function() {
  server.register(plugins, function() {
    server.route(routes);
    server.views(views);
    server.start(function() {
      console.log('info', server.info.uri);
      console.log('info', process.env.MONGO_URL);
    });
  });
});
