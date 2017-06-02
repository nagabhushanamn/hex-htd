var Vehicle = Backbone.Model.extend({});

// set a property in the constructor
var ford = new Vehicle({
	type: 'car'
});

console.log(ford.has('type'));

console.log(ford.has('year'));
