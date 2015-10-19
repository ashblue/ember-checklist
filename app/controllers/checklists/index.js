import Ember from 'ember';

export default Ember.Controller.extend({
  getText() {
    return 'my text';
  },

  groupChecklists() {
    console.log('checklists ran');
    return [];
  }
});
