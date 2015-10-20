import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('checklists', function() {
    this.route('show', { path: '/:checklist_id' });
  });
});

export default Router;
