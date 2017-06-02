var Vehicle = Backbone.Model.extend({
    prop1: '1'
});

var v = new Vehicle();
var v2 = new Vehicle();

v.prop1 = 'one';

console.log(v.prop1);
console.log(v2.prop1);
​