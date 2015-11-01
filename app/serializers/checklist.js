import DS from 'ember-data';
import env from '../config/environment';

var attrConfig = {};

// Enable special environmental configs for development since we're faking a server
if (env.environment === 'development') {
    attrConfig.entries = { serialize: true };
} else {
    attrConfig.user = { serialize: true, key: 'user_id' };
}

export default DS.RESTSerializer.extend({
    attrs: attrConfig
});
