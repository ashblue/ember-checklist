import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    attrs: {
        checklist: { serialize: true, key: 'checklist_id' },
        user: { serialize: true, key: 'user_id' }
    }
});
