import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    attrs: {
        entries: { serialize: true },
        user: { serialize: true, key: 'user_id' }
    }
});
