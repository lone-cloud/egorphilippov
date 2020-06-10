'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-font-awesome': {
      fontFormats: ['woff2'],
      removeUnusedIcons: EmberApp.env() === 'production',
      useScss: true,
    },
    fingerprint: {
      exclude: [
        'android-chrome-192x192.png',
        'apple-touch-icon.png',
        'favicon-16x16.png',
        'favicon-32x32.png',
        'mstile-150x150.png',
        'me.jpg',
      ],
    },
  });

  app.import('node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js');
  app.import('node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js');

  return app.toTree();
};
