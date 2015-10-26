import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import env from '../../config/environment';

// Setup the route to be unauthenticated if we aren't using a server to pull our content
var ctrl;
if (env.authentication) {
    ctrl = Ember.Route.extend(AuthenticatedRouteMixin, {
        model() {
            return this.store.findAll('checklist');
        }
    });
} else {
    ctrl = Ember.Route.extend({
        model() {
            return this.store.findAll('checklist');
        }
    });
}

export default ctrl;
