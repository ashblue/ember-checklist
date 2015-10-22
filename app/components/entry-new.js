import Ember from 'ember';

export default Ember.Component.extend({
    newEntry: {},

    actions: {
        addEntry: function () {
            var newEntry = this.get('newEntry');
            var checklist = this.get('targetObject.model');

            if (!newEntry.text) return;

            // Bind the entry to the current checklist
            newEntry.checklist = checklist.id;

            var entry = this.get('targetObject.store').createRecord('entry', newEntry);
            entry.save().then(function () {
                // Bind checklist to the newly created entry
                //console.log(entry, entry.get('id'), checklist);
                checklist.get('entries').pushObject(entry);
                checklist.save();
            });

            this.set('newEntry.text', '');

            var $entry = this.$('#entry-form');
            $entry.focus();
        }
    }
});
