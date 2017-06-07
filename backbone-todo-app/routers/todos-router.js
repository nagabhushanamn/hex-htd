

var app = app || {};

(function () {

    let TodosRouter = Backbone.Router.extend({
        routes: {
            '/': 'filterTodos',
            filterTodos: function (params) {
                console.log(params);
                app.todoFilter = params || '';
                app.todos.trigger('filter');
            }
        }
    });

    app.todosRouter = new TodosRouter();
    Backbone.history.start();

})();