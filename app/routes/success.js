import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    document.title = 'Success!';
  }
});
