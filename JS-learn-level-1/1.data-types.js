/*

    data types
    -----------


    1. simple / primitives  ==> values

        a. string
        b. number
        c. boolean
        d. undefined
        e. symbol  ( from es6 )

    2. complex / references ==> objects

*/


// primitives

//--------------------------------------

// a. string

var name = "Nag";
var selection = 'a';

//--------------------------------------

// b. number

var count = 12;
var cost = 12.12;


//--------------------------------------

// c. boolean

var found = false;

/*

// imp-note : falsy values in .js-lang

    false,0,"",null,undefined,NAN

    ref : https://dorey.github.io/JavaScript-Equality-Table/

*/

//--------------------------------------

// d. undefined


var v;

//--------------------------------------


// Reference types ==> objects


/*

    how to create objects on .js-lang ?

    syntax

    var ref=new Constructor();  e.g  EventEmitter

*/

// e.g

// var person = new Object(); // obj wrapper

// // imp-note : by default all .js objects are extensible

// person.name = "Nag"; // string
// person.age = 33; // number
// person.doWork = function () {
//     console.log('person work...');
// }


// // imp-note : by default all .js objects are confgurable
// delete person.age;


//--------------------------------------
// literal-style objects
//--------------------------------------


// 1. Object

// var config = new Object();
// config.url = "http://";
// config.method = "GET";
// config.success = function (resp) { }


// or

var config = {
    url: "http://",
    method: 'GET',
    success: function (resp) {}
};

// config.newProp = "newValue";


//--------------------------------------

// b. Array


// var menu = new Array();
// menu.push("idly");
// menu.push("vada");
// menu.push("poori");

// or

// var menu = ["idly", "vada", "poori"];

//--------------------------------------

// c. RegExp

/*

    color code :
    
        #
        len ==> 3 or 6
        char ==> a-f 0-9


        pattern : / ^\s*#?([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})\s*$ /

*/


// var re = new RegExp("^\\s*#?([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})\\s*$");

// or

// var re = /^\s*#?([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})\s*$/;


//--------------------------------------

// d. function

// imp-note : every func is an object by default

// var add = new Function("n1", "n2", "var r=n1+n2;return r;");


// or


// function add(n1, n2) {
//     var r=n1+n2;return r;
// }



//--------------------------------------


// How to access obj's properties ?

/*

    way-1 : '.' notation
    way-1 : '[]' notation

*/

var person = {
    name: 'Nag',
    "my-address": "CHN"
};


person.name = "Nag N"; // set
console.log(person.name); // get

console.log(person['name']); // get


person["my-address"] = "BLR";
console.log(person["my-address"]);

var prop = "name";
console.log(person[prop]);