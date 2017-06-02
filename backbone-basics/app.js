



// var myModel = new Backbone.Model();
// myModel.set('content', 'this is some content');

// var myView = new Backbone.View({
//     model: myModel,
//     className: 'well',
// });


// $('body').append(myView.el);

// console.log(myView.model.toJSON());

//  - - - - - - - - - - - - - - - - - - - - - - - - --  - - - - - -  - -- - 

// var V = Backbone.View.extend({
//     tagName: 'div',
//     render: function () {
//         this.$el.html('backbone.js')
//             .css('background-color', '#def');
//         return this.$el;
//     }
// });


// var v = new V();

// v.render().appendTo('body');

//  - - - - - - - - - - - - - - - - - - - - - - - - --  - - - - - -  - -- -


// var RefreshingView = Backbone.View.extend({
//     tagName: 'div',
//     initialize: function () {
//         this.model.on('change', function () {
//             this.render();
//         }, this);
//     },
//     render: function () {
//         this.$el.html(this.model.get('text'));
//         return this.$el;
//     }
// });



// var m = new Backbone.Model({ text: new Date().toString() });
// var v = new RefreshingView({ model: m });

// v.render().appendTo('body');

// setInterval(function () {
//     m.set({ text: new Date().toString() });
// }, 1000);


//  - - - - - - - - - - - - - - - - - - - - - - - - --  - - - - - -  - -- -

// var FormView = Backbone.View.extend({
//     tagName: 'div',

//     events: {
//         'click .clickable': 'handleClick',
//         'change': 'handleChange'
//     },

//     render: function () {
//         this.$el.html(`
//         <input type="text" class="clickable" placeholder="clickable" /> 
//         <input type="text" />`);
//         return this;
//     },

//     handleClick: function () {
//         console.log('handleClick');
//     },

//     handleChange: function () {
//         console.log('handleChange');
//     }
// });



// var fv = new FormView();

// $('body').append(fv.render().el);

//  - - - - - - - - - - - - - - - - - - - - - - - - --  - - - - - -  - -- -

// var doc = new Backbone.Model();


// var DocumentView = Backbone.View.extend({
// 	tagName: 'div',
// 	className: 'well',
// 	render: function () {
// 		$(this.el).append('<h1>' + this.model.get('title') + '</h1>');
// 		$(this.el).append('<p>' + this.model.get('summary') + '</p>');
// 		return this;
// 	}
// });



// var view = new DocumentView({model: doc});

// doc.on('change', function () {
// 	$('body').append(view.render().el);
// });

// doc.set({
//   title: 'The Principles of Mathematics',
//   summary: 'Pure Mathematics is'
// });


//  - - - - - - - - - - - - - - - - - - - - - - - - --  - - - - - -  - -- -

// var h = new Backbone.Model({
//     content: 'Historical context'
// });

// var HeadingView = Backbone.View.extend({
//     tagName: 'p',
//     render: function () {
//         this.$el.html(this.model.get('content'));
//         return this;
//     }
// });

// var v = new HeadingView({
//     model: h
// });

// $('body').append(v.render().el);

// v.remove();

//  - - - - - - - - - - - - - - - - - - - - - - - - --  - - - - - -  - -- -

// var V = Backbone.View.extend({
//     // tagName: 'div',
//     el: 'body',
//     render: function () {
//         this.$el.html('some content');
//         return this;
//     }
// });

// var v = new V();

// v.render();

//  - - - - - - - - - - - - - - - - - - - - - - - - --  - - - - - -  - -- -


// var V = Backbone.View.extend({
//     tagName: 'li',
//     id: 'thing',
//     className: 'active',
//     attributes: {
//         'data-value': 12345
//     }
// });

// var v = new V();

// $('body').prepend(v.el);

//  - - - - - - - - - - - - - - - - - - - - - - - - --  - - - - - -  - -- -


// var V = Backbone.View.extend({
//     el: 'body',
//     render: function () {
//         var data = { lat: -27, lon: 153 };
//         this.$el.html(_.template('<%=lat %> <%=lon%>')(data));
//         return this;
//     }
// });

// var v = new V();

// v.render();

//  - - - - - - - - - - - - - - - - - - - - - - - - --  - - - - - -  - -- -



// // precompile the template
// var template = _.template('<%= lat %>, <%= lon %>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​');
// console.log(typeof template);

// // render the precompiled template
// for (var i = 0; i < 100; i++) {
//     console.log(template({ lat: -27, lon: 153 }));
// }

//  - - - - - - - - - - - - - - - - - - - - - - - - --  - - - - - -  - -- -

// var collection = new Backbone.Collection();

// collection.add(new Backbone.Model({ name: 'Fred', age: 6 }));
// console.log(JSON.stringify(collection));

// collection.add({ name: 'Fred', age: 6 });
// console.log(JSON.stringify(collection));

// collection.add([
//     new Backbone.Model({ name: 'Sue', age: 29 }),
//     new Backbone.Model({ name: 'Dave', age: 74 })
// ]);
// console.log(JSON.stringify(collection));

// collection.add([
//     { name: 'Sue', age: 29 },
//     { name: 'Dave', age: 74 }
// ]);
// console.log(JSON.stringify(collection));

// collection.remove(collection.at(1));
// console.log(JSON.stringify(collection));

// collection.on('add', function (model, col, options) {
//     console.log('added ' + model.get('name') + ' at index ' + options.index);
// });

// collection.add({ name: 'Troy', age: 12 });

// collection.add({ name: 'Eric', age: 64 }, { at: 3, silent: true });

// collection.add({ name: 'Eric', age: 64 }, { at: 3, silent: false });


//  - - - - - - - - - - - - - - - - - - - - - - - - --  - - - - - -  - -- -


var Vehicle = Backbone.Model.extend({});

var Vehicles = Backbone.Collection.extend({
    model: Vehicle
}, {
        oneVehicle: function () {
            return new Vehicles({ color: 'green' });
        }
    });

var collection = Vehicles.oneVehicle();

console.log(JSON.stringify(collection));

//  - - - - - - - - - - - - - - - - - - - - - - - - --  - - - - - -  - -- -
