var collection = new Backbone.Collection();
var model = new Backbone.Model({name: 'Sue', age: 29});

collection.on('add', function(model,collection) {
  console.log(JSON.stringify(model) + ' added');
});

collection.on('remove', function(model,collection) {
  console.log(JSON.stringify(model) + ' removed');
});
  
collection.add(model);
collection.remove(model);

​