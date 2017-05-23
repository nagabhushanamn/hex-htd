(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// console.log('-main.js-');

// // in mng

// var app = app || {};

// app.mod1.greet();

//---------------------------------------------------------------

console.log('-main.js-');

var mod1 = require("hex-greet");
// mod1.sayHello();
mod1.greet("en");
mod1.greet("es");
},{"hex-greet":2}],2:[function(require,module,exports){
// // morning-module

// var app = app || {};

// (function () {

//     var noonFunc=app.mod2.greet;

//     var message = "Good Morning"; // private
//     // public
//     var greet = {
//         greet: function () {
//             console.log(message);
//             noonFunc();
//         }
//     };

//     app.mod1 = greet; // export    


// })();

//---------------------------------------------------------------

console.log('-mod1.js-');

var en = require('./mod2');
var es = require('./mod3');

var message = "good mng";

function greet(lang) {
    if (lang === "en") {
        en(message);
    }
    if (lang === "es") {
        es(message);
    }
}

function sayHello() {
    console.log('Hello...');
}

function sayBye() {
    console.log('Bye...');
}
// greet();

module.exports = {
    greet,
    sayHello,
    sayBye
};
},{"./mod2":3,"./mod3":4}],3:[function(require,module,exports){
// // noon-module

// var app = app || {};

// (function () {

//     var greet = {
//         greet: function () {
//             console.log('Good Noon');
//             app.mod3.greet();
//         }
//     };

//     app.mod2 = greet;

// })();

//---------------------------------------------------------------

// en-greet

function greet(message) {
    console.log("Hello "+message);
}
module.exports = greet;
},{}],4:[function(require,module,exports){
// // evening-module

// var app = app || {};

// (function () {

//     var greet = {
//         greet: function () {
//             console.log('Good evening');
//         }
//     };

//     app.mod3 = greet;

// })();

//---------------------------------------------------------------


// en-greet

function greet(message) {
    console.log("Ola "+message);
}
module.exports = greet;
},{}]},{},[1]);
