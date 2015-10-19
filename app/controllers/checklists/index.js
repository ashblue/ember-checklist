import Ember from 'ember';

export default Ember.ArrayController.extend({
  groupChecklists: function () {
    var groupSize = 3;
    var stack = [];
    var group = [];
    this.forEach(function (checklist, index) {
      if (index % groupSize === 0) {
        group = [];
        stack.push(group);
      }

      group.push(checklist);
    });

    return stack;
  }.property('content.[]')
});
