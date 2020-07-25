import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  submitEnabled: computed('email.length', 'message.length', function () {
    return this.email && this.email.length >= 3 && this.message && this.message.length >= 3;
  }),
});
