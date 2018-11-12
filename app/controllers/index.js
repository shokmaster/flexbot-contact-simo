import Controller from '@ember/controller';
import { storageFor } from 'ember-local-storage';

export default Controller.extend({

  customer: storageFor('customer'),

  actions: {

    submit() {
      this.get('model').save().then(() => {
        this.transitionToRoute('thanks');
      });
    }

  }

});
