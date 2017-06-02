var Vehicle = Backbone.Model.extend({
	defaults: {
		'color': 'white',
		'type': 'car'
	}
});

var car = new Vehicle();
car.get('color'); // white
car.get('type');  // car
