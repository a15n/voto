import DS from 'ember-data';
const attr = DS.attr;

export default DS.Model.extend({
	// relationships
	place: DS.belongsTo('place'),

	// properties
	url: attr('string'),
});
