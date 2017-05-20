"use strict";

//------------------------------------------

// const person = {
//     name: 'Nag',
//     age: 33
// };

// Object.defineProperty(person, 'name', {
//     configurable: false,
//     writable: false,
//     enumerable: false
// });

//delete person.name;
//person.name = "Kannan";
// console.log(person.name);

// for (let prop in person) {
//     console.log(prop);
// }

//------------------------------------------


// const person = {
//     name: 'Nag',
//     age: 33
// };

// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);

// person.bla = "bla-value";

// delete person.name;
// delete person.age;

// person.age = 22;

//------------------------------------------


//  

// Array.prototype.push = "helloo";


// var arr = ["biryani"];
// arr.push("drinks");

//------------------------------------------


// let person = {
//     _name: 'Nag',
//     _age:33,
//     set name(name) {
//         if (name) {
//             this._name = name;
//         }
//     },
//     get name() {
//         return this._name;
//     },
//     get age() {
//         return this._age;
//     }
// };

// person.name = "Kannan";  // set
// console.log(person.name); // get

// person.age = 44;

// console.log(person.age);


//-------------------------------


let person = {
    name:''
};

if ("name" in person) {
    console.log('name prop exist');
}







