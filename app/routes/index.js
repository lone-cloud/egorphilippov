import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  afterModel(){
    document.title = 'Egor Philippov';
  }
});
