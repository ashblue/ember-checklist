import Ember from 'ember';

export default Ember.Controller.extend({
  showForm: false,
  entryText: '',

  saveModal: function () {
    var model = this.get('model');
    if (model.isDirty) {
        model.save();
    }
  },

  actions: {
    toggleForm: function () {
      var showForm = this.get('showForm');
      this.set('showForm', !showForm);
    },

    forceSave: function () {
      var debounced = this.get('debounced');
      if (debounced) {
          Ember.run.cancel(debounced);
      }

      this.get('saveModal').call(this);
    },

    save: function () {
      var debounced = Ember.run.debounce(this, this.get('saveModal'), 2000); // 2 seconds
      this.set('debounced', debounced);
    }
  }
});
