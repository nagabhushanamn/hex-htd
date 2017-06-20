var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var TodoLayoutView = require('./views/todo-layout');


var Todo = require('./models/todo');

var initialData = [
    { assignee: 'Scott', text: 'Write a book about Marionette' },
    { assignee: 'Andrew', text: 'Do some coding' }
];

var app = new Marionette.Application({
    onStart: function (options) {
        var todoLayoutView = new TodoLayoutView({
            collection: new Backbone.Collection(options.initialData),
            model: new Todo()
        });
        
        todoLayoutView.render();
        todoLayoutView.triggerMethod('show');
    }
});

app.start({ initialData: initialData });