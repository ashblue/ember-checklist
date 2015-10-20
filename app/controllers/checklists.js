import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeChecklist: function () {
      this.destroy();
    }
  }
});
