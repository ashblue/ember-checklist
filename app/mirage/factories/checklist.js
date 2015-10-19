import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title(i) { return `Checklist title ${i + 1}`; },
  updated_at: faker.list.random(faker.date.past(), faker.date.recent()),
  created_at: faker.list.random(faker.date.past(), faker.date.recent()),
  complete: faker.list.random(true, false),
  entries: []
});
