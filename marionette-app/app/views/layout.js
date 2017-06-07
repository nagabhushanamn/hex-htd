

var Backbone = require('backbone'); // 1
var Marionette = require('backbone.marionette'); //



// var HelloWorld = Marionette.LayoutView.extend({  // 2
//     el: '#app-root',  // 3
//     template: require('./templates/layout.html')  // 4
// });


// var hello = new HelloWorld();  // 5

// hello.render();  // 6

// - - - - - - - - - - - - - - - - - - - - -- - - - - - -  -- - - 


// var TodoList = Marionette.LayoutView.extend({
//     el: '#app-root',
//     template: require('./templates/layout.html')
// });



// var todoList = new TodoList({
//     model: new Backbone.Model({
//         items: [
//             { assignee: 'Scott', text: 'Write a book about Marionette' },
//             { assignee: 'Andrew', text: 'Do some coding' }
//         ]
//     })
// });


// todoList.render();


// - - - - - - - - - - - - - - - - - - - - -- - - - - - -  -- - - 

// var ToDo = Marionette.LayoutView.extend({
//     tagName: 'li',
//     template: require('./templates/todoitem.html')
// });


// var TodoList = Marionette.CollectionView.extend({
//     el: '#app-root',
//     tagName: 'ul',

//     childView: ToDo
// });


// var todoList = new TodoList({
//     collection: new Backbone.Collection([
//         { assignee: 'Scott', text: 'Write a book about Marionette' },
//         { assignee: 'Andrew', text: 'Do some coding' }
//     ])
// });

// todoList.render();

// - - - - - - - - - - - - - - - - - - - - -- - - - - - -  -- - - 

var ToDoModel = require('../models/Todo');


var ToDo = Marionette.LayoutView.extend({
  tagName: 'li',
  template: require('../templates/todoitem.html')
});


var TodoList = Marionette.CompositeView.extend({
  el: '#app-root',
  template: require('../templates/todolist.html'),

  childView: ToDo,
  childViewContainer: 'ul',

  ui: {
    assignee: '#id_assignee',
    form: 'form',
    text: '#id_text'
  },

  triggers: {
    'submit @ui.form': 'add:todo:item'
  },

  collectionEvents: {
    add: 'itemAdded'
  },

  onAddTodoItem: function() {
    this.model.set({
      assignee: this.ui.assignee.val(),
      text: this.ui.text.val()
    });

    if (this.model.isValid()) {
      var items = this.model.pick('assignee', 'text');
      this.collection.add(items);
    }
  },

  itemAdded: function() {
    this.model.set({
      assignee: '',
      text: ''
    });

    this.ui.assignee.val('');
    this.ui.text.val('');
  }
});

// var todo = new TodoList({
//   collection: new Backbone.Collection([
//     {assignee: 'Scott', text: 'Write a book about Marionette'},
//     {assignee: 'Andrew', text: 'Do some coding'}
//   ]),
//   model: new ToDoModel()
// });

// todo.render();


module.exports = TodoList;