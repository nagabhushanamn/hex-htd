"use strict";

var app = app || {};

(function () {

    let TodoView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#todo-template').html()),

        events: {
            "click .toggle": 'toggleCompleted',
            "click .destroy": 'destroy',
            //...
        },
        toggleCompleted() {
            // 
        },
        destroy() {
            //
        },
        render() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }


    });

    app.TodoView = TodoView;

})();