import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  checklist: null,
  text: faker.lorem.sentence(),
  complete: faker.list.random(true, false)
});
