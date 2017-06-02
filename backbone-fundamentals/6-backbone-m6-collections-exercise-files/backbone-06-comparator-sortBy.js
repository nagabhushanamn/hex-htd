var Vehicle = Backbone.Model.extend({});

var Vehicles = Backbone.Collection.extend({
    model: Vehicle,

    // sort in descending alphabetical order
    comparator: function (vehicle1, vehicle2) {
      return vehicle1.get('color') < vehicle2.get('color') ? 1 : -1;        
      //return vehicle1.get('color').localeCompare(vehicle2.get('color')) * -1;
    }
});
    
var vehicles = new Vehicles([
    { color: 'red' }, { color: 'blue' }, { color: 'green' }
]);

console.log(JSON.stringify(vehicles));

