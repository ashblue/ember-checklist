import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        if (this.controllerFor('application').get('session.isAuthenticated')) {
            this.transitionTo('/checklists');
        }
    }
});
