import Ember from 'ember';

export default Ember.Component.extend({
  entriesEmpty: function () {
    return this.get('checklist.entries').length === 0;
  }.property('checklist.entries.length'),

  actions: {
    delete: function () {
      if (confirm("Are you sure you want to delete this?"))
        this.get('checklist').destroyRecord();
    }
  }
});
