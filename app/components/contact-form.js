import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  submitEnabled: computed('email', 'message', function () {
    return this.get('email.length') >= 3 && this.get('message.length') >= 3;
  })
});
