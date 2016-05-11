import DS from 'ember-data';

export default DS.Model.extend({
	place: DS.belongsTo('place'),

	four: 4,
});
