var Vehicle = Backbone.Model.extend({});

var Vehicles = Backbone.Collection.extend({
    model: Vehicle,
    comparator: function (vehicle) {
      return vehicle.color;        
    }
});
    
var vehicles = new Vehicles([
    { color: 'red' }, { color: 'blue' }
]);

console.log(JSON.stringify(vehicles));​