// let person = {
//     name: 'Nag',
//     age: 32,
//     sayName: function () {
//         //...
//     }
// };

//--------------------------


// // ES5

// let name = "Nag";
// let age = 33;

// let person = {
//     name: name,
//     age:age
// };

// ES6

// let name = "Nag";
// let age = 33;

// let person = {
//     name,
//     age
// };

//----------------------------------------


// let person = {
//     name: 'Nag',
//     sayName: function () { 

//     }
// };

// or

// let person = {
//     name: 'Nag',
//     sayName() { 

//     }
// };

//----------------------------------------


let dynamicVar1 = "name";
let dynamicVar2 = "email";

let value = 'Nag';

let person = {
    ["hex-" + dynamicVar1]: value,
    ["hex-" + dynamicVar2]: 'Nag@gmail.com',
    "say Name"() {
        console.log("im unknown");
    }
};

person["say Name"]();