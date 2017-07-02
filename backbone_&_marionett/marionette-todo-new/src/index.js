

import Bn from 'backbone';
import _ from 'underscore';
import Mn from 'backbone.marionette';




var TodoLayoutView = require('./views/todo-app-layout');


var Todo = require('./models/todo');
var initialData = [
    { assignee: 'Nag', text: 'Go to Next Training' },
    { assignee: 'Kannag', text: 'Take care hex participants further..' }
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