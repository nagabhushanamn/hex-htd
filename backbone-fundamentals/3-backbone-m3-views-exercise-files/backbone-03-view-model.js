var doc = new Backbone.Model();

var DocumentView = Backbone.View.extend({
	tagName: 'div',
	className: 'document-container',
	render: function () {
		$(this.el).append('<h1>' + this.model.get('title') + '</h1>');
		$(this.el).append('<p>' + this.model.get('summary') + '</p>');

		$(this.el).append(this.make(
			'h3', 							// tag name
			{class: "footnote"}, 			// attributes
			"* conditions apply"			// contents
		)); 
		return this;
	}
});

var view = new DocumentView({model: doc});

doc.on('change', function () {
	$('body').append(view.render().el);
});

doc.set({
  title: 'The Principles of Mathematics',
  summary: 'Pure Mathematics is the class of all propositions of the form p implies q'
});