import DS from 'ember-data';

const attr = DS.attr;

export default DS.Model.extend({
	photos: DS.hasMany('photo'),

	name: attr('string'),
	city: attr('string'),
	numReviews: attr('string'),


	hashtag: function() {
		// Golden Gate Bridge -> GoldenGateBridge
		let name = this.get('name') || '';
		return name.classify();
	}.property('name'),
});
