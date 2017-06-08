var Marionette = require('backbone.marionette');

var TodoView = require('./todo-view');


var TodoList = Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'list-group',
    childView: TodoView
});


module.exports = TodoList;