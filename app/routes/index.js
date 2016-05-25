import Em from 'ember';

export default Em.Route.extend({
  afterModel(){
    document.title = 'Egor Philippov';
  }
});
