import Controller from '@ember/controller';
import { get, computed } from '@ember/object';

export default Controller.extend({
  submitEnabled: computed('email.length', 'message.length', function () {
    return get(this, 'email.length') >= 3 && get(this, 'message.length') >= 3;
  }),
});
