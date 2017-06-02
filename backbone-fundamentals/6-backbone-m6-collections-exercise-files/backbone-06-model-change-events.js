​var collection = new Backbone.Collection();

collection.on('change', function(model,options) {
  console.log(JSON.stringify(model) + ' changed');
});

collection.on('change:name', function(model) {
  console.log('name property changed');
});

var model = new Backbone.Model();

collection.add(model);

model.set('age', '57');
model.set('name', 'Peter');
