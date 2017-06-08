console.log('-index.js-');


let Marionette = require('backbone.marionette');
let Backbone = require('backbone');


// let SimpleView = Marionette.LayoutView.extend({
//     el: '#app-root',
//     template: require('./templates/simple-template.html'),

//     // events: {
//     //     //'click .my-button': 'alertBox',
//     //     'keyup .my-input': 'changeDiv'
//     // },
//     // alertBox: function () {
//     //     alert('button clicked...');
//     // },
//     // changeDiv: function () {
//     //     let text = this.$el.find('.my-input').val();
//     //     this.$el.find('.my-text').text(text);
//     // }

//     ui: {
//         content: '.my-text',
//         input: '.my-input',
//         save: '.my-button'
//     },
//     events: {
//         'click @ui.save': 'changeDiv'
//     },
//     changeDiv: function () {
//         let text = this.ui.input.val();
//         this.ui.content.text(text);
//         this.ui.input.val('');
//     }


// });

// let view = new SimpleView();
// view.render();


//------------------------------------------------------------


// let InputView = Marionette.LayoutView.extend({
//     el: '#box1',
//     template: require('./templates/my-input.html'),
//     ui: {
//         input: '.my-input',
//         button: '.my-button'
//     },
//     events: {
//         'click @ui.button': 'updateModel'
//     },
//     updateModel: function () {
//         var text = this.ui.input.val();
//         this.model.set({
//             myText: text
//         });
//         this.ui.input.val('')
//     }
// });

// let OutputView = Marionette.LayoutView.extend({
//     el: '#box2',
//     template: require('./templates/my-output.html'),
//     modelEvents: {
//         'change:myText': 'render'
//     }
// });


// let myModel = new Backbone.Model({ myText: '' });

// let inputView = new InputView({ model: myModel });
// let outputView = new OutputView({ model: myModel });

// inputView.render();
// outputView.render();

//------------------------------------------------------------
