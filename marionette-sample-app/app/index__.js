

var Marionette = require('backbone.marionette');



// var MyView = Marionette.LayoutView.extend({
//     el: '#app-root',
//     template: require('./my/mytemplate.html'),

//     // events: {
//     //     'click .mybutton': 'alertBox',
//     //     'keyup .myinput': 'changeDiv'
//     // },
//     ui: {
//         content: '.mytext',
//         input: '.myinput',
//         save: '.mybutton'
//     },

//     alertBox: function () {
//         alert('Button Clicked');
//     },
//     // changeDiv: function () {
//     //     var text = this.$el.find('.myinput').val();
//     //     this.$el.find('.mytext').text(text);
//     // },
//     events: {
//         'click @ui.save': 'changeDiv'
//     },

//     changeDiv: function () {
//         var text = this.ui.input.val();
//         this.ui.content.text(text);
//     }

// });
// view = new MyView();
// view.render();


// - - - - - - - - - - --  - - - - - - -- - -  -- 

var Output = Marionette.LayoutView.extend({
    template: require('./output.html'),

    modelEvents: {
        'change:mytext': 'render'
    }
});


var Input = Marionette.LayoutView.extend({
    template: require('./input.html'),

    ui: {
        input: '.myinput',
        button: '.mybutton'
    },

    events: {
        'click @ui.button': 'updateModel'
    },

    updateModel: function () {
        var text = this.ui.input.val();
        this.model.update({
            mytext: text
        });
    }
});

