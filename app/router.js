import config from './config/environment';
import EmberRouter from '@ember/routing/router';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('projects');
  this.route('resume');
});

export default Router;
