import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function () {
  // @NOTE Routes don't want to nest for some odd reason (bug possibly?)
  this.route('auth/login');
  this.route('auth/register');

  this.resource('checklists', function () {
      this.route('show', {path: '/:checklist_id'});
  });

  this.route('auth', function() {
    this.route('login');
    this.route('register');
  });
});

export default Router;
