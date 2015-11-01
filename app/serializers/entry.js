import DS from 'ember-data';
import env from '../config/environment';


var attrConfig = {};
if (env.environment !== 'development') {
    attrConfig = {
        checklist: { serialize: true, key: 'checklist_id' },
        user: { serialize: true, key: 'user_id' }
    };
}

export default DS.RESTSerializer.extend({
    attrs: attrConfig
});
