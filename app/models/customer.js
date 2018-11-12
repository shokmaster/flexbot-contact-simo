import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({

  nombre: attr('string'),

  apellidos: attr('string'),

  empresa: attr('string'),

  comentario: attr('string'),

  rating: attr('number'),

  terms: attr('boolean', { defaultValue: false }),

  createdAt: attr('date', {
    defaultValue() { return new Date(); }
  })

});
