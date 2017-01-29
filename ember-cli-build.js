/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp({
    emberCliFontAwesome: {
      useScss: true
    }
  });

  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js');
  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js');

  return app.toTree();
};
