export default function (server) {
    var _private = {
        randomDate: function (start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        },

        randomPast: function () {
            return this.randomDate(faker.date.past(), new Date());
        }
    };

    var entries = [];
    for (let i = 0, l = 7; i < l; i++) {
        let time = _private.randomPast();
        let entry = server.create('entry', {checklist: 99999, created_at: time});
        entries.push(entry);
    }

    server.create('checklist', {
        id: 99999,
        entries: _.pluck(entries, 'id'),
        created_at: new Date(),
        updated_at: new Date()
    });

    for (let i = 0, l = 7; i < l; i++) {
        let time = _private.randomPast();
        server.create('checklist', {
            updated_at: time,
            created_at: time
        });
    }
}
