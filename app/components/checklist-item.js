import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete () {
      if (confirm("Are you sure you want to delete this?"))
        this.get('checklist').destroyRecord();
    }
  }
});
