/*

    'this' ==> owner of execution-context

*/

// function f() {
//     return this;
// }

// let o = f();

//----------------------------------------


// why we need 'this' .js-lang ?

// let pName = "Global";

// let person = {
//     pName: 'Nag', // obj's property
//     sayName: function () {
//         //let pName = "Local";
//         console.log('im ' + pName); // context's hierarchy data
//         //console.log('im ' + person.pName); // obj's data
//         console.log('im ' + this.pName); // obj's data
//     }
// };
// // person.sayName();

// let oldPerson = person;
// person = { pName: 'Kannan' };

// oldPerson.sayName();


//-----------------------------------------------------

// let p1 = {
//     name: 'Nag',
//     sayName: function () { console.log('im ' + this.name) }
// };
// let p2 = {
//     name: 'Ria',
//     sayName: function () { console.log('im ' + this.name) }
// };


// A. static function-binding

// function sayNameForAll() {
//     //console.dir(this);
//     console.log('im '+this.pName);
// }

// let p1 = {
//     pName: 'Nag',
//     sayName: sayNameForAll
// };
// let p2 = {
//     pName: 'Ria',
//     sayName: sayNameForAll
// };

// sayNameForAll();  // function-invocation ( this ==> global-object)
// p1.sayName();     // method-invocation   (this ==> invoker-obj)
// p2.sayName();



//-----------------------------------------------------


// dynamic function binding



// form third-party

// let greetLib = {
//     sayName: function (message,from,...rest) {
//         console.log(message + ' im ' + this.name+" : "+from);
//     }
// };

// our data-objects
// let p1 = {
//     name: 'Nag'
// };
// let emp = {
//     name: 'Kannan'
// };

/// way-1
// greetLib.sayName.call(p1,"Hello","BLR");
// greetLib.sayName.call(emp, "Hi", "CHN");

// or

/// way-2
// greetLib.sayName.apply(p1,["Hello","BLR","bla bla"]);
// greetLib.sayName.apply(emp, ["Hi", "CHN"]);

// way-3  ( bind now , execute later multiple times)

// let kannanSayNameFunc = greetLib.sayName.bind(emp, "Hi", "CHN");
// kannanSayNameFunc();
// kannanSayNameFunc();

// let nagSayNameFunc = greetLib.sayName.bind(p1);

// nagSayNameFunc("Hey", "CHN");
// nagSayNameFunc("Hello","Universe");

//------------------------------------------------------


// i want to many similar objs


// Es5

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log('im ' + this.name);
    }
    this.sayAge = function () {
        console.log('im ' + this.age + " old");
    }
}

let p1 = new Person('Nag', 33);  // ( this ==> new-obj )
let p2 = new Person('Ria', 2);

//---------------------------------------------------



/*

    .in .js-lang , we can invoke func in 4 ways


    a. function invocation  ( this ==> global-obj)
    b. method invocation    ( this ==> invoker-obj)
    c. call/apply/bind invocation ( this ==> arg-obj)
    d. consructor invocation ( this ==> new-obj)

    


*/