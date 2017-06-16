import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  actions: {
    emailMe(){
      window.open("mailto:philippovegor@gmail.com?subject=Hello Egor!", '_blank');
    }
  }
});
