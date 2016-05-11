import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		// debugger;
		// var newPost = this.store.createRecord('post', {
		// 	title: 'EmberFire is flaming hot!',
		// 	body: 'You can store and sync data in realtime without a backend.'
		// });

		// newPost.save();

		// return 'four';
		return this.store.findAll('post');
	},
	afterModel(m) {
		console.log(m);
	},

});
