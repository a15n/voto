import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			places: this.store.findAll('place'), // will eventually get this with a .find('place', num)
			photos: this.store.findAll('photo'), // will eventually just get the photos associated w/ the place
		});
	},
});
