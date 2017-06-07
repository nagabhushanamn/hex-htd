"use strict";

var app = app || {};

(function () {

    let TodoView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#todo-template').html()),
        initialize() {
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'visible', this.toggleVisible);
        },
        events: {
            "click .toggle": 'toggleCompleted',
            "click .destroy": 'destroy',
            //...
        },
        toggleCompleted() {
            console.log('change event..');
            this.model.toggle();
        },
        toggleVisible() {
            this.$el.toggleClass('hidden', this.isHidden());
        },
        isHidden() {
            return this.model.get('completed') ?
                app.todoFilter === 'active' :
                app.todoFilter === 'completed';
        },
        destroy() {
            //let todoId = this.model.get('id');
            //app.todos.remove({ id: todoId });
            console.dir(this.model);
            this.model.destroy({ id: this.model.id }, {
                success: function () {
                    console.log('deleted..');
                }
            });
        },
        render() {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.toggleClass('completed', this.model.get('completed'));
            return this;
        }


    });

    app.TodoView = TodoView;

})();