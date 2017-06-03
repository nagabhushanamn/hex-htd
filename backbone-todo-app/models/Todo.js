"use strict"

var app = app || {};

(function () {
    // Todo Model    
    let Todo = Backbone.Model.extend({
        defaults: {
            title: '',
            completed: false
        }

    });
    app.Todo = Todo;
})();