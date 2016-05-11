import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('post');
	},
	afterModel(m) {
		console.log(1, m);
	},
});
