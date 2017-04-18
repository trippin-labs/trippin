import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  locations: DS.hasMany('location'),
  pictures: DS.hasMany('picture'),
});
