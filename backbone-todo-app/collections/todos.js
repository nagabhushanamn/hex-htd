"use strict";

var app = app || {};

(function () {

    var Todos = Backbone.Collection.extend({
        model: app.Todo,
        completed: function () {
            return this.where({ completed: true });
        },
        remaining: function () {
            return this.where({ completed: false });
        },
        nextId: function () {
            return this.length ? this.last().get('id') + 1 : 1
        },
        comparator: 'id'
    });

    let todos = new Todos(); // to have single instance of this collection class

    // hard-coded todo
    todos.add({ id: 1, title: 'Learn JavaScript', completed: true });
    todos.add({ id: 2, title: 'Learn Backbone.js', completed: false });

    app.todos = todos;

})();

