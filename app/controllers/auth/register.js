import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),

    actions: {
        register: function () {
            var ctrl = this;
            var userData = this.getProperties('email', 'password', 'password_confirmation');

            Ember.$.post('/users', { user: userData })
                .success(function () {
                    ctrl.get('session').authenticate('authenticator:devise', userData.email, userData.password);
                })
                .error(function (response) {
                    var errorData = response.responseJSON.errors;
                    var errors = [];
                    for (var e in errorData) {
                        errors.push(e + ': ' + errorData[e] + '; ');
                    }

                    ctrl.set('errorMessage', errors);
                });
        }
    }
});
