import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({

  fullscreen: inject(),

  actions: {

    toggleFullscreen() {
      this.get('fullscreen').toggle();
    }

  }

});
