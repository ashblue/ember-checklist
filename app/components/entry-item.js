import Ember from 'ember';

export default Ember.Component.extend({
    saveEntry: function () {
        var entry = this.get('entry');
        if (entry.isDirty) {
            entry.save();
        }
    },

    actions: {
        toggleComplete: function () {
            var entry = this.get('entry');
            entry.set('complete', !entry.get('complete'));
            this.send('save');
        },

        save: function () {
            var debounced = Ember.run.debounce(this, this.get('saveEntry'), 2000); // 2 seconds
            this.set('debounced', debounced);
        },

        delete: function () {
            var entry = this.get('entry');
            var checklist = entry.get('checklist');
            checklist.get('entries').removeObject(entry);
            entry.destroyRecord();
            checklist.save();
        }
    }
});
