var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Todo = require('../models/todo');

var ListView = require('./todo-list');
var FormView = require('./todo-form');


var Layout = Marionette.LayoutView.extend({
    el: '#app-root',

    template: require('../templates/todos/todo-app-layout.html'),

    regions: {
        form: '.todo-form',
        list: '.todo-list'
    },

    collectionEvents: {
        add: 'itemAdded'
    },
    itemAdded: function () {
        this.model.set({
            assignee: '',
            text: ''
        });
    },

    onChildviewAddNewTodoItem: function (child) {
        this.model.set({
            assignee: child.ui.assignee.val(),
            text: child.ui.text.val()
        }, { validate: true });

        if (this.model.isValid()) {
            var items = this.model.pick('assignee', 'text');
            this.collection.add(items);
        }

    },

    onShow: function () {
        var formView = new FormView({ model: this.model });
        var listView = new ListView({ collection: this.collection });

        this.showChildView('form', formView);
        this.showChildView('list', listView);
    },

});

module.exports = Layout;