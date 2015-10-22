import Ember from 'ember';

export default Ember.Component.extend({
    newEntry: {},

    actions: {
        addEntry: function () {
            var newEntry = this.get('newEntry');
            var checklist = this.get('targetObject.model');

            if (!newEntry.text) return;

            // Bind the entry to the current checklist
            newEntry.checklist = checklist;

            var entry = this.get('targetObject.store').createRecord('entry', newEntry);
            entry.save().then(function () {
                checklist.save();
            });

            this.set('newEntry.text', '');

            var $entry = this.$('#entry-form');
            $entry.focus();
        }
    }
});
