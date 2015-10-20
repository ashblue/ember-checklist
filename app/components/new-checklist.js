import Ember from 'ember';

/**
 * Must be placed relative to a checklist template in order to work
 */
export default Ember.Component.extend({
  newChecklist: {}, // We will bind our form to this

  actions: {
    submitChecklist () {
      this.get('targetObject.store').createRecord('checklist', this.get('newChecklist')).save();

      var $checklist = this.$('#checklist-form');
      $checklist.find('input[type=text]').val('');
      $checklist.focus();
    }
  }
});
