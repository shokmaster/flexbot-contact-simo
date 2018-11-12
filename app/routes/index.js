import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.get('store').createRecord('customer');
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('isSaved', null);
    }
  }

});
