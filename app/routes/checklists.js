import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log('models');
    let checklists = [
      {
        title: 'Learn Ember',
        updated_at: Date.now()
      },
      {
        title: 'Solve World Hunger',
        updated_at: Date.now()
      },
      {
        title: 'Learn Ember',
        updated_at: Date.now()
      },
      {
        title: 'Solve World Hunger',
        updated_at: Date.now()
      },
      {
        title: 'Learn Ember',
        updated_at: Date.now()
      },
      {
        title: 'Solve World Hunger',
        updated_at: Date.now()
      },
      {
        title: 'Learn Ember',
        updated_at: Date.now()
      },
      {
        title: 'Solve World Hunger',
        updated_at: Date.now()
      }
    ];

    return checklists;
  }
});
