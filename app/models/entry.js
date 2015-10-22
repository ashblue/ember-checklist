import DS from 'ember-data';

var _private = {
    currentTime () {
        return new Date();
    }
};

export default DS.Model.extend({
    checklist: DS.belongsTo('checklist'),
    text: DS.attr('string'),
    complete: DS.attr('boolean'),
    created_at: DS.attr('date', { defaultValue: _private.currentTime })
});
