import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { storageFor } from 'ember-local-storage';

export default Controller.extend({
  customer: storageFor('customer'),

//  isSaved: computed('model.email', function() {
//    const sto = this.get('customer');
//    console.log('sto', sto);
//    return sto.includes(this.get('email'));
//  }),

  actions: {
    submit() {
      const email = this.get('model.email');
      const sto = this.get('customer');
      console.log('sto', sto);

      //this.get('customer').addObject(email);
      this.get('model').save().then(() => {
        this.transitionToRoute('thanks');
      });
    }
  }

});
