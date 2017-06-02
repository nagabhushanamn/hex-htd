
var collection = new Backbone.Collection();
console.log(JSON.stringify(collection));

var Vehicles = Backbone.Collection.extend({});
collection = new Vehicles();

collection = new Backbone.Collection([
  new Backbone.Model({label: 'A'}), 
  new Backbone.Model({label: 'B'}) 
]);

console.log(JSON.stringify(collection));
​