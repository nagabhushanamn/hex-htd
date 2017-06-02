var collection = new Backbone.Collection([
    {name: 'Fred', age: 6},
    {name: 'Sue', age: 29},
    {name: 'Dave', age:74}
]);

​console.log(JSON.stringify(collection.at(0)));

console.log(JSON.stringify(collection.at(collection.length -1)));
​