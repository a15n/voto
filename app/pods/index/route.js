import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('place');
	},
	afterModel(model) {
		let ping = model.get('firstObject');
		console.log(ping);
	},
});
