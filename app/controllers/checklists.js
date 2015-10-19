import Ember from 'ember';

export default Ember.Controller.extend({
  newChecklist: {}, // We will bind our form to this

  actions: {
    removeChecklist: function () {
      this.destroy();
    },

    submitChecklist () {
      this.store.createRecord('checklist', this.newChecklist).save();
      $('#checklist-form').find('input[type=text]').val('');
    }
  }
});
