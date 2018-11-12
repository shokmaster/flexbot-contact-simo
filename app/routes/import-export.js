import Route from '@ember/routing/route';
import { Promise } from 'rsvp';
import { storageFor } from 'ember-local-storage';

export default Route.extend({

  customerStorage: storageFor('customer'),

  model() {
    return this.get('store').findAll('customer');
  },

  readFile: function(file) {
    const reader = new FileReader();

    return new Promise((resolve) => {
      reader.onload = function(event) {
        resolve({
          file: file.name,
          type: file.type,
          data: event.target.result,
          size: file.size
        });
      };

      reader.readAsText(file);
    });
  },

  actions: {

    importData(event) {
      this.readFile(event.target.files[0]).then((file) => {
        this.store.importData(file.data);
      });
    },

    exportData() {
      const filename = (new Date())
        .toLocaleString('es-ES')
        .replace(' ', '-')
        .replace(/[^a-z0-9-]/gmi, "")
        .replace(/\s+/g, "");

      this.store.exportData(['customers'], {
        download: true,
        filename: `flexbot-contact-form-${filename}.json`
      });
    },

    clearAll() {
      const continuar = window.confirm("Esto borrará todo el almacenamiento local. Asegúrate de haber exportado los datos antes de continuar.");
      if (continuar) {
        this.get('customerStorage').clear();
        this.get('customerStorage').reset();
        localStorage.clear();
        //let key;
        //for (let i = 0; i < localStorage.length; i++) {
        //  key = localStorage.key(i);
        //  if (key.startsWith('customers-')) {
        //    localStorage.removeItem(key);
        //  }
        //}
      }
    },

    goToIndex() {
      this.transitionTo('index');
    }

  }

});
