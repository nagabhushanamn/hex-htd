"use strict";

var app = app || {};

(function () {

    let AppView = Backbone.View.extend({

        el: '.todoapp',
        footerTemplate: _.template($('#footer-template').html()),

        events: {
            "keypress .new-todo": 'createOnEnter',
            "click .toggle-all": "toggleAllComplete",
            "click .clear-completed": "clearCompleted"
        },
        initialize() {
            console.log("AppView : initialize()")
            this.$main = $('.main');
            this.$list = $('.todo-list');
            this.$input = $('.new-todo');
            this.$footer = $('.footer');

            this.listenTo(app.todos, 'add', this.addOne);
            this.listenTo(app.todos, 'all', _.debounce(this.render, 0));
            this.listenTo(app.todos, "filter", this.filterAll);

            app.todos.fetch();

        },
        render() {
            console.log("AppView : render()")
            let todos = app.todos;

            let remaining = app.todos.remaining().length;
            let completed = app.todos.completed().length;

            console.log(todos.length);

            if (todos.length) {
                this.$main.show();
                this.$footer.html(this.footerTemplate({
                    remaining
                }));

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
                //let newTodo = { id: app.todos.nextId(), title: val };
                let newTodo = new app.Todo({ title: val });
                newTodo.save({}, {
                    success: () => {
                        this.$input.val('')
                        app.todos.add(newTodo);
                    }
                });

            }

        },
        toggleAllComplete() {
            let isAllCompleted = app.todos.every(todo => todo.get('completed'));
            console.log(isAllCompleted);
            app.todos.each(todo => {
                todo.set('completed', !isAllCompleted);
            });
            // this.render();
        },
        clearCompleted() {
            app.todos.remove(app.todos.completed());
        },
        filterOne(todo) {
            todo.trigger('visible');
        },
        filterAll() {
            app.todos.each(this.filterOne, this);
        }

    });

    app.AppView = AppView;

})();