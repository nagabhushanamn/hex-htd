"use strict";

var app = app || {};

(function () {

    var Todos = Backbone.Collection.extend({
        model: app.Todo,
        //localStorage: new Backbone.LocalStorage("my-todos"),
        url: 'http://0.0.0.0:8181/api/todos',
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

    app.todos = todos;

})();

