import Component from '@ember/component';

export default Component.extend({
  actions: {
    emailMe() {
      window.open("mailto:philippovegor@gmail.com?subject=Hello Egor!", '_blank');
    }
  }
});
