import Ember from 'ember';
import env from '../config/environment';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    isAuthenticated: function () {
        if (!env.authentication) return true;
        return this.session.isAuthenticated;
    },

    actions: {
        logout () {
            this.get('session').invalidate();
        }
    }
});
