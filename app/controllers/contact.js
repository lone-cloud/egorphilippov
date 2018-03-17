import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  submitEnabled: computed('email', 'message', function () {
    return this.get('email.length') >= 3 && this.get('message.length') >= 3;
  })
});