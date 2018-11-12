import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    goToIndex() {
      this.transitionTo('index');
    }
  }

});
