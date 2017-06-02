var Vehicle = Backbone.Model.extend({});

var Vehicles = Backbone.Collection.extend({
    model: Vehicle
}, {
    oneVehicle: function () {
        return new Vehicles({ color: 'green' });
    }
});
    
var collection = Vehicles.oneVehicle();

console.log(JSON.stringify(collection));