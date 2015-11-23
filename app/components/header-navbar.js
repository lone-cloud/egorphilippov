import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    emailMe(){
      window.location.href = "mailto:philippovegor@gmail.com?subject=Hello Egor!";
    }
  }
});
