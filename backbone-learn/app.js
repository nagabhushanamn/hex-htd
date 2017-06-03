"use strict"


// View (s)

// 1. Instantiating View


// let myView = new Backbone.View({
//     tagName: 'div',
//     className: "well"
// });


// $('body').append(myView.el);


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// 2. View with render

// let V = Backbone.View.extend({
//     tagName: 'div',
//     render: function () {
//         this.$el.html('<h1> Welcome to backbone.js </h1>')
//             .css({ 'background-color': "#def" });
//         return this;
//     }
// });

// let v1 = new V();
// let v2 = new V();

// $('body').append(v1.render().el);
// $('body').append(v2.render().el);

// or

// v1.render().$el.appendTo('body');


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


// View + Model

// let dateModel = new Backbone.Model({
//     now: new Date().toString()
// });

// let ClockView = Backbone.View.extend({
//     initialize: function () {
//         //let self = this;
//         this.model.on('change', () => {
//             this.render();
//         });
//     },
//     render() {
//         this.$el.html(this.model.get('now'));
//         return this;
//     }
// });


// way-1
// let clock1 = new ClockView({ model: dateModel, el: '#clock-box' });

// // way-2
// let clock2 = new ClockView({ model: dateModel });
// clock2.render().$el.appendTo('body');

// setInterval(() => {
//     dateModel.set('now', new Date().toString());
// }, 1000);


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


/*

// Backbone classes

    Backbone.Model
    Backbone.View
    Backbone.Collection
    Backbone.Router

*/

// let person = new Backbone.Model({ name: 'Nag', age: 33 });


// let Person = Backbone.Model.extend({
//     initailize() {
//     },
//     sayName() {
//         console.log('im ' + this.name);
//     }
// });

// let p1 = new Person({ name: 'Nag', age: 32 });


// let PersonView = Backbone.View.extend({
//     tagName: 'div',
//     className: 'well',
//     render() {
//         this.model.on('change', () => { this.render() });
//         this.$el.html(`
//             Name: ${this.model.get('name')} , <br/>
//             Age : ${this.model.get('age')}
//         `);
//         return this;
//     }
// });

// let personView1 = new PersonView({ model: p1, el: '#box' });
// personView1.render();


// setInterval(() => {
//     p1.set('age', p1.get('age') + 1);
// }, 1000)



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 



// View + Events


// let Counter = Backbone.Model.extend({
//     count: 0,
//     initialize(attrs) {
//         if (attrs)
//             this.count = attrs.count
//     },
//     inc() {
//         this.count++;
//     },
//     dec() {
//         this.count--;
//     },
//     getCount() {
//         return this.count;
//     }
// })


// // let counter1 = new Counter();

// let CounterView = Backbone.View.extend({
//     tagName: 'div',
//     className: 'well',
//     events: {
//         'click .btn-primary': 'handlePlusClick',
//         'click .btn-danger': 'handleMinusClick',
//     },
//     handlePlusClick() {
//         this.model.inc()
//         this.render();
//     },
//     handleMinusClick() {
//         this.model.dec()
//         this.render();
//     },
//     render() {
//         this.$el.html(`

//             <button class="btn btn-primary">+1</button>
//             <button class="btn btn-danger">-1</button>
//             <hr/>
//             <span class="badge"> ${this.model.count} </span>

//         `);
//         return this;
//     }
// });

// let counterView1 = new CounterView({ model: new Counter({ count: 100 }) });
// counterView1.render().$el.appendTo('#root');


// let counterView2 = new CounterView({ model: new Counter() });
// counterView2.render().$el.appendTo('#root');


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


// var headingModel = new Backbone.Model({
//     content: 'I am sleepy'
// });

// var HeadingView = Backbone.View.extend({
//     tagName: 'p',
//     render() {
//         this.$el.html(`<h1>${this.model.get('content')}<h1>`);
//         return this;
//     }

// });

// var v = new HeadingView({ model: headingModel });

// $('body').append(v.render().el);

// setTimeout(() => {
//     v.remove();
// }, 2000);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


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


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


// var source = '<p>Latitude: {{lat}}</p>';
// var compiled = Handlebars.compile(source);
// var rendered = compiled({ lat: -27 });
// console.log(rendered);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// // precompile the template
// var template = _.template('<%= lat %>, <%= lon %>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​');
// console.log(typeof template);

// // render the precompiled template
// for (var i = 0; i<100; i++) {
//     console.log(template({lat: -27, lon: 153}));
// }
//-----------------------------------------------------

// var Chapter  = Backbone.Model;
// var chapters = new Backbone.Collection;

// chapters.comparator = 'page';

// chapters.add(new Chapter({page: 9, title: "The End"}));
// chapters.add(new Chapter({page: 5, title: "The Middle"}));
// chapters.add(new Chapter({page: 1, title: "The Beginning"}));
// chapters.sort();

// console.log(chapters.pluck('title'));


//-----------------------------------------------------