import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  actions: {
    emailMe(){
      window.location.href = "mailto:philippovegor@gmail.com?subject=Hello Egor!";
    }
  }
});
