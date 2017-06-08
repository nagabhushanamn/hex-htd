var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Todo = require('../models/todo');

var FormView = require('./todo-form');
var ListView = require('./todo-list');


var Layout = Marionette.LayoutView.extend({
  el: '#app-root',

  template: require('../templates/todo-layout.html'),

  regions: {
    form: '.form',
    list: '.list'
  },

  collectionEvents: {
    add: 'itemAdded'
  },

  onShow: function () {
    var formView = new FormView({ model: this.model });
    var listView = new ListView({ collection: this.collection });

    this.showChildView('form', formView);
    this.showChildView('list', listView);
  },

  onChildviewAddTodoItem: function (child) {
    this.model.set({
      assignee: child.ui.assignee.val(),
      text: child.ui.text.val()
    }, { validate: false });
    if (this.model.isValid()) {
      var items = this.model.pick('assignee', 'text');
      this.collection.add(items);
    }
  },

  itemAdded: function () {
    this.model.set({
      assignee: '',
      text: ''
    });
  }
});

module.exports = Layout;