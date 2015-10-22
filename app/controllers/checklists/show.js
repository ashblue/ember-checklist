import Ember from 'ember';

export default Ember.Controller.extend({
    showForm: false,
    entryText: '',

    saveModel: function () {
        var model = this.get('model');
        if (model.isDirty) {
            model.save();
        }
    },

    entriesByDate: function () {
        return this.get('content.entries').sortBy('created_at').reverse();
    }.property('content.entries.[]'),

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

            this.get('saveModel').call(this);
        },

        save: function () {
            var debounced = Ember.run.debounce(this, this.get('saveModel'), 2000); // 2 seconds
            this.set('debounced', debounced);
        }
    }
});
