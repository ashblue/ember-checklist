import DS from 'ember-data';

export default DS.Model.extend({
  checklist: DS.belongsTo('checklist'),
  text: DS.attr('string'),
  complete: DS.attr('boolean')
});
