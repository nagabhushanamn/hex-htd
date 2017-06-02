
// show that Backbone is declared and is an object that contains the Backbone components
Backbone

// show that Backbone.Model is a type (function)
Backbone.Model

// instantiate a model
var book = new Backbone.Model({title: 'White Tiger', author: 'Aravind Adiga'});

// show that book is a model
book

// show how to access properties
book.get('title');

// show that we can update properties
book.set('title', 'The Stripey Tiger');
book.toJSON();

// set new properties
book.set('ISBN', 'asdfasdf798s7f9sad7f9');
book.get('ISBN');


