/* 
	toJSON
*/

var Vehicle = Backbone.Model.extend({});
var ford = new Vehicle();
ford.set('type', 'car');
var attrs = ford.toJSON(); // { type: ‘car’ }
console.log(attrs);

ford.set('type', 'boat');

console.log(attrs.type);

console.log(JSON.stringify(attrs));​
