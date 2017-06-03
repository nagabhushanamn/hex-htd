"use strict";

var app = app || {};

(function () {

    let AppView = Backbone.View.extend({
        el: '.todoapp',
        events: {
            "keypress .new-todo": 'createOnEnter'
        },
        initialize() {
            console.log("AppView : initialize()")
            this.$main = $('.main');
            this.$list = $('.todo-list');
            this.$input = $('.new-todo');

            this.listenTo(app.todos, 'add', this.addOne)

        },
        render() {
            console.log("AppView : render()")
            let todos = app.todos;

            if (todos.length) {
                this.$main.show();
                this.addAll();

            } else {
                this.$main.hide();
            }
        },
        addOne(todoModel) {
            var view = new app.TodoView({ model: todoModel });
            this.$list.append(view.render().el);
        },
        addAll() {
            this.$list.html('');
            app.todos.each(this.addOne, this);
        },
        createOnEnter(event) {
            let val = this.$input.val().trim();
            if (event.which === 13 && val) {
                let newTodo = { id: app.todos.nextId(), title: val };
                app.todos.add(newTodo);
                this.$input.val('')
            }

        }
    });

    app.AppView = AppView;

})();