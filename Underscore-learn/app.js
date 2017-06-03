"use strict"

let products = [

    { id: 1, name: 'product-1', price: 198000, desc: 'desc-1', type: 'elec' },
    { id: 2, name: 'product-2', price: 8000, desc: 'desc-2' },
    { id: 3, name: 'product-3', price: 98000, desc: 'desc-3' },
    { id: 4, name: 'product-4', price: 18000, desc: 'desc-4', type: 'elec' },
    { id: 5, name: 'product-5', price: 78000, desc: 'desc-5' }

];


let result;

// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 


// _.each(products, product => {
//     console.log(product);
// });

// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// result = _.map(products, product => {
//     if (product.price > 10000) return product.name
// });

// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// result = _.reduce(products, function (acc, item) {
//     console.log(acc);
//     console.log(item);
//     return acc + item.price;
// }, 100000);

// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// result = _.find(products, product => product.price > 8000);

// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// result=_.filter(products,product=>product.price>8000);

// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// result = _.where(products, { type: 'elec', price: 18000 });

// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// result = _.reject(products, product => product.price !== 8000);


// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// result = _.every(products, product => product.price > 7000);


// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// result = _.some(products, product => product.type === "elec");


// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// result = _.contains([1, 2, 3], 3);

// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// function sayName() {
//     console.log('im ' + this.name);
// }

// let p1 = { name: 'Nag' };
// let p2 = { name: 'Praveen', sayName: function () { console.log("nenu " + this.name) } };
// let p3 = { name: 'Mohan' };

// let persons = [p1, p2, p3];

// _.invoke(persons, sayName);

// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// result=_.pluck(products,'price');

// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// result=_.max(products,product=>product.price);
// result = _.min(products, product => product.price);


// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 


// result=_.sortBy(products,'price');

// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// result = _.groupBy(products, 'type');


// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// result=_.indexBy(products,'type');


// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 



//

// let p = { name: 'Praveen' };

// let greetLib = {
//     sayName: function (message) {
//         console.log(message +' im ' + this.name);
//     }
// };

// let praveenSayName = greetLib.sayName.bind(p);
// praveenSayName();
// praveenSayName();


// let func = _.bind(greetLib.sayName, p);
// func("Hello");
// func("Hi");



// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// $(function () {

//     let tnrService = {
//         name: 'Nag',
//         teachJS: function () {
//             console.log(this.name + " teaching JS");
//         },
//         teachJava: function () {
//             console.log(this.name + " teaching JAVA");
//         }
//     }



//     // $('.btn-primary').on('click', tnrService.teachJS.bind(tnrService));
//     // $('.btn-danger').on('click', tnrService.teachJava.bind(tnrService));

//     // _.bindAll(tnrService, 'teachJS', 'teachJava');

//     $('.btn-primary').on('click', tnrService.teachJS);
//     $('.btn-danger').on('click', tnrService.teachJava);


// });

// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - - 

// var subtract = function (a, b) { return b - a; };
// let sub5 = _.partial(subtract, 5);
// console.log(sub5(20, 10));
// => 15

// Using a placeholder
// subFrom20 = _.partial(subtract, _, 20);
// subFrom20(5);
// => 15

// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - -


// function func(n) {
//     console.log('calling with ' + n);
//     return n * n;
// }

// let memFunc = _.memoize(func);

// [2, 3, 2, 3].forEach(n => {
//     console.log(memFunc(n));
// });


// - - - - - - - - - - - -- - - - - - - - - - - - -  -- - - - - -


// var log = _.bind(console.log, console);
// _.delay(log, 1000, 'logged later');
// // => 'logged later' // Appears after one second.



// let count = 0;

// let intervalId = setInterval(function () {
//     console.log('break....');
//     count++;

//     if (count === 10) {
//         clearInterval(intervalId);
//     }

// }, 1000);


// var greet = function (name) { console.log('greet...'); return "hi: " + name; };
// var exclaim = function (statement) { console.log('ex...'); return statement.toUpperCase() + "!"; };
// var welcome = _.compose(greet, exclaim);
// console.log(welcome("Praveen"))
