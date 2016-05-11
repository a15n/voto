import Ember from 'ember';
import { apiData } from './data';

export default Ember.Controller.extend({
	actions: {
		scrapeVotoAPI() {
			let firstObject = apiData[0];
			let place = this.store.createRecord('place', {
				name: firstObject.attraction,
				city: firstObject.city,
				numReviews: firstObject.numReviews,
			});

			console.log(place);
		},
	},
});
