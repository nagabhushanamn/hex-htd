

console.log('-index.js-');


let backbone = require('backbone');
let Marionette = require('backbone.marionette'); // 1

//-----------------------------------------------------------

// let HelloWorldView = Marionette.LayoutView.extend({ // 2
//     el: '#app-root', // 3
//     template: require('./templates/layout.html')// 4
// });


// let hello = new HelloWorldView(); // 5
// hello.render(); // 6


//-----------------------------------------------------------

// Todo Application


// let TodoListView = Marionette.LayoutView.extend({
//     el: '#app-root',
//     template: require('./templates/layout.html')
// });

// let todoListView = new TodoListView({
//     model: new Backbone.Model({
//         items: [
//             { assignee: 'kannan', text: "Organize goto meeting" },
//             { assignee: 'Nag', text: "Preset marionette session" },
//         ]
//     })
// });

// todoListView.render();

//-----------------------------------------------------------



// let TodoView = Marionette.LayoutView.extend({
//     tagName: 'li',
//     className: 'list-group-item',
//     template: require('./templates/todo-view.html')
// });

// let TodoListView = Marionette.CollectionView.extend({
//     el: '#app-root',
//     childViewContainer:'ul',
//     className: 'list-group',
//     childView: TodoView
// });


// let todoListView = new TodoListView({
//     collection: new Backbone.Collection([
//         { assignee: 'kannan', text: "Organize goto meeting" },
//         { assignee: 'Nag', text: "Preset marionette session" },
//     ])
// });

// todoListView.render();


//
//-----------------------------------------------------------


let TodoView = Marionette.LayoutView.extend({
    tagName: 'li',
    className: 'list-group-item',
    template: require('./templates/todo-view.html')
});


let TodoListView = Marionette.CompositeView.extend({
    
    el: '#app-root',
    template: require('./templates/todo-list.html'),
    childView: TodoView,
    childContainerView: 'ul.list-group',

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

    onAddTodoItem: function () {
        this.collection.add({
            assignee: this.ui.assignee.val(),
            text: this.ui.text.val()
        });
    },

    itemAdded: function () {
        this.ui.assignee.val('');
        this.ui.text.val('');
    }
});


let todoListView = new TodoListView({
    collection: new Backbone.Collection([
        { assignee: 'kannan', text: "Organize goto meeting" },
        { assignee: 'Nag', text: "Preset marionette session" },
    ])
});

todoListView.render();





