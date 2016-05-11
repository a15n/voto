import DS from 'ember-data';
const attr = DS.attr;

export default DS.Model.extend({
	// relationships
	photos: DS.hasMany('photo'),

	// properties
	city: attr('string'),
	name: attr('string'),
	numReviews: attr('string'),

	// computed properties
	hashtag: function() {
		// Golden Gate Bridge -> GoldenGateBridge
		let name = this.get('name') || '';
		return name.classify();
	}.property('name'),
});
