import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    goToIndex() {
      this.transitionToRoute('index');
    }
  }

});
