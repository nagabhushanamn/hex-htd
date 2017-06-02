var myModel = new Backbone.Model();
myModel.set('content', 'this is some content');

var myView = new Backbone.View({
	model: myModel,
	className: 'model-object',
});

$('body').prepend(myView.el);

console.log(myView.model.toJSON());