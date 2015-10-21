export default function(server) {
  var entries = server.createList('entry', 10, { checklist: 99999 });
  server.createList('checklist', 1, { id: 99999, entries: _.pluck(entries, 'id'), updated_at: faker.date.future() });
  server.createList('checklist', 7);
}
