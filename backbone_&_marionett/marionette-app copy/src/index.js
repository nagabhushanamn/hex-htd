

import Bn from 'backbone';
import _ from 'underscore';
import Mn from 'backbone.marionette';


// console.log('all is well');


// const MyView = Mn.View.extend({
//     tagName: 'h1',
//     template: _.template('Marionette says hi!')
// });

// var myView = new MyView();
// myView.render();
// $('#root').append(myView.$el);



// const MyView = Mn.View.extend({
//     el:'#root',
// });
// var myView = new MyView();

// console.log(myView.isRendered());
// myView.destroy();
// console.log(myView.isRendered());




// const MenuView = Mn.View.extend({
//     template: '#menu-tpl',
// });

// const ContentView = Mn.View.extend({
//     template: '#content-tpl',
// });


// const MainView = Mn.View.extend({
//     template: '#main-tpl',

//     regions: {
//         menuRegion: '#menu-panel',
//         contentRegion: '#content-panel'
//     },

//     onRender() {
//         this.showChildView('menuRegion', new MenuView());
//         this.showChildView('contentRegion', new ContentView());
//     },

//     onSomeEvent() {
//         const content = this.getChildView('contentRegion');
//         content.destroy();
//     },

//     onMoveView: function () {
//         var menu = this.detachChildView('menuRegion');
//         var content = this.detachChildView('contentRegion');
//         this.showChildView('contentRegion', menu);
//         this.showChildView('menuRegion', content);
//     }

// });



// const myView = new MainView();
// myView.render();

// $('#root').append(myView.$el);


// setTimeout(() => {
//     // myView.triggerMethod('some:event');
//     myView.triggerMethod('move:view');
// }, 2000);


//-------------------------------------------------------------



// var MyView = Mn.View.extend({

//     onRender: function () {
//         console.log("Fired whenever view.triggerMethod('render') is called.");
//     },

//     onOtherEvent: function (argument) {
//         console.log("Fired other:event with '" + argument + "' as an argument");
//     }
// });

// var view = new MyView();

// view.triggerMethod('other:event', 'test argument');

// // view.render();


//-----------------------------------------------------



// let User = Bn.Model.extend({
//     defaults: {
//         name: ''
//     }
// });

// const user1 = new User({ name: 'Nag' });
// const user2 = new User({ name: 'Kannan' });

// const UserView = Mn.View.extend({
//     template: '#user-template'
// });

// const UsersView = Mn.CollectionView.extend({
//     collection: new Backbone.Collection(),
//     childView: UserView
// });



// const collectionView = new UsersView();
// collectionView.render();

// $('#root').append(collectionView.$el);


// collectionView.collection.add(user1);
// collectionView.collection.add(user2);


//------------------------------------------------------




//one module
const myChannel = Backbone.Radio.channel('basic');

myChannel.on('some:event', function () {
    console.log('some:event was triggered')
});

//another module
const someChannel = Backbone.Radio.channel('js');

someChannel.trigger('some:event');

