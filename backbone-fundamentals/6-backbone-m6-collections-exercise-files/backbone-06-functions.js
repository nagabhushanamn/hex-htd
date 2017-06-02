var collection = new Backbone.Collection([
    {name: 'Fred', age: 6},
    {name: 'Sue', age: 29},
    {name: 'Dave', age:74}
]);

collection.forEach(function (model) {
    console.log(model.get('name'));
})​;

console.log(collection.map(function(model) {
    return model.get('name').toUpperCase();
}));

var start = 0;
var collectiveAge = collection.reduce(function(memo, model) {
    return memo + model.get('age');
}, 0);
console.log(collectiveAge);

console.log(JSON.stringify(collection.find(function (model) { 
    return model.get('name') === 'Dave'; 
})));
​