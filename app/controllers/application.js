import Ember from 'ember';
import env from '../config/environment';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    isAuthenticated: function () {
        if (!env.authentication) return true;
        return this.get('session.isAuthenticated');
    }.property('session.isAuthenticated'),

    current_user: function() {
        var data = this.get('session.data.authenticated');
        return data;
    }.property('session.data.authenticated'),

    actions: {
        logout () {
            this.get('session').invalidate();
        }
    }
});
