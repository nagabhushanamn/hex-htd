$(function () {


    //-------------------------------------------------------

    let util = {
        store: function (key, data) {
            if (arguments.length > 1) {
                localStorage.setItem(key, JSON.stringify(data));
            } else {
                let storeData = localStorage.getItem(key);
                return (storeData && JSON.parse(storeData)) || [];
            }
        }
    };

    //-------------------------------------------------------

    let App = {
        todos: [],
        init: function () {
            this.todos = util.store("jq-todos");
            this.todoTemplate = Handlebars.compile($('#todo-template').html());
            this.bindEvents();
            this.render();
        },
        bindEvents: function () {
            $('.new-todo').on('keyup', this.create.bind(this));
            $('.toggle-all').on('change', this.toggleAll.bind(this));
            $('.todo-list')
                .on('click', '.destroy', this.destroy.bind(this))
                .on('change', '.toggle', this.toggle.bind(this))
                .on('dblclick', 'label', this.editingMode.bind(this))
                .on('keyup', '.edit', this.editKeyup.bind(this))
                .on('focusout', '.edit', this.update.bind(this))

        },
        render: function () {
            let htmlContent = this.todoTemplate(this.todos);
            $(".todo-list").html(htmlContent);
            $(".main").toggle(this.todos.length > 0);
            util.store("jq-todos", this.todos);
        },
        create: function (event) {
            let $input = $(event.target);
            let val = $input.val();
            if (event.which !== 13 || !val)
                return;
            let newTodo = {
                id: Math.floor(Math.random() * 1000),
                title: val,
                completed: false
            };
            this.todos.push(newTodo);
            $input.val('');
            this.render();
        },
        destroy: function (event) {
            let todoId = $(event.target).closest('div').data('todo-id');
            this.todos.splice(_.findIndex(this.todos, todo => todo.id === todoId), 1);
            this.render();
        },
        toggle: function (event) {
            let todoId = $(event.target).closest('div').data('todo-id');
            let todo = _.find(this.todos, todo => todo.id === todoId);
            todo.completed = !todo.completed;
            this.render();
        },
        toggleAll: function () {
            let allCompleted = this.todos.every(todo => todo.completed);
            console.log(allCompleted);
            this.todos.forEach(todo => {
                todo.completed = !allCompleted
            });
            this.render();
        },
        editingMode: function (event) {
            var $input = $(event.target).closest('li').addClass('editing').find('.edit');
            $input.val($input.val()).focus();
        },
        editKeyup: function (event) {

            if (event.which === 13) {
                event.target.blur();
            }
            if (event.which === 27) {
                $(event.target).data('abort', true).blur()
            }


        },
        update: function (e) {
            let el = e.target;
            let $el = $(el);
            var val = $el.val().trim();

            if ($el.data('abort')) {
                $el.data('abort', false)
            } else {

                if (!val) {
                    this.destroy(e);
                    return;
                }

                let todoId = $el.prev('div').data('todo-id');
                let todo = _.find(this.todos, todo => todo.id === todoId);
                todo.title = val;
            }

            this.render();

        }



    };

    App.init();


});