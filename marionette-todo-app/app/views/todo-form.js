
var Marionette = require('backbone.marionette');


var FormView = Marionette.LayoutView.extend({
    template: require('../templates/todos/todo-form.html'),

    triggers: {
        submit: 'add:new:todo:item'
    },

    modelEvents: {
        change: 'render'
    },

    ui: {
        assignee: '#id_assignee',
        text: '#id_text'
    }
});


module.exports = FormView;