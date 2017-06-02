var collection = new Backbone.Collection();
var model = new Backbone.Model({name: 'Fred', age: 6});

collection.add(model);

console.log(model.cid);

console.log(JSON.stringify(collection.getByCid('c0')));
