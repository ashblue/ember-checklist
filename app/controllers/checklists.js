import Ember from 'ember';

export default Ember.ArrayController.extend({
  getText() {
    return 'text';
  },

  groupChecklists() {
      var groupSize = 3;
      var stack = [];
      var group = [];
      this.get('content').forEach(function (checklist, index) {
        if (index % groupSize === 0) {
          group = [];
          stack.push(group);
        }

        group.push(checklist);
      });

      console.log(stack);

      return stack;
  }
});
