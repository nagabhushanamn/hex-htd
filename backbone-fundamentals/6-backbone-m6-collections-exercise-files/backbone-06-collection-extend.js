var Vehicle = Backbone.Model.extend({});

var Vehicles = Backbone.Collection.extend({
	model: Vehicle
});
    
var vehicles = new Vehicles([
	{ color: 'blue' }, { color: 'red' }
]);

console.log(vehicles.length);

console.log(JSON.stringify(vehicles.at(0).toJSON()));