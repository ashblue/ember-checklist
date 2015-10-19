import Ember from 'ember';

export function parseDate([date, format]) {
  return moment(date).format(format);
}

export default Ember.Helper.helper(parseDate);
