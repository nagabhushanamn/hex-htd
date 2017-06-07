"use strict"

var app = app || {};

(function () {
    // Todo Model    
    let Todo = Backbone.Model.extend({
        defaults: {
            title: '',
            completed: false
        },
        idAttribute: 'id',
        urlRoot: 'http://0.0.0.0:8181/api/todos/',
        toggle() {
            this.save({
                completed: !this.get('completed')
            });
        }

    });
    app.Todo = Todo;
})();