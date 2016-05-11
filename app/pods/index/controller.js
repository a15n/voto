import Ember from 'ember';
import { apiData } from './data';

export default Ember.Controller.extend({
	actions: {
		scrapeVotoAPI() {
			let firstObject = apiData[0];
			// eventually do this over a forEach

			let place = this.store.createRecord('place', {
				name: firstObject.attraction,
				city: firstObject.city,
				numReviews: firstObject.numReviews,
			});

			let placePhotos = place.get('photos');

			let photosArray = firstObject.photos.photoArray;
			photosArray.forEach((photoObject) => {
				let photoRecord = this.store.createRecord('photo', {
					url: photoObject.url,
				});
				placePhotos.pushObject(photoRecord);
				photoRecord.save();
			});

			place.save();
		},
	},
});
