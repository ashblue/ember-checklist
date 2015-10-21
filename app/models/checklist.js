import DS from 'ember-data';

var _private = {
  currentTime () {
    return new Date();
  }
};

export default DS.Model.extend({
  title: DS.attr('string'),
  created_at: DS.attr('date', { defaultValue: _private.currentTime }),
  updated_at: DS.attr('date', { defaultValue: _private.currentTime }),
  entries: DS.hasMany('entry', { async: true })
});
