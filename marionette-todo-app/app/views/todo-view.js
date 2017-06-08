var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var TodoView = Marionette.LayoutView.extend({
    tagName: 'li',
    className:'list-group-item',
    template: require('../templates/todos/todo-view.html')
});

module.exports = TodoView;