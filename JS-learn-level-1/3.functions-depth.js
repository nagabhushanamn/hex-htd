/*


    function is an object in .js lang


    we can create function-obj in 2 ways


    way-1 : function declaration

            -> Named functions
            -> func-obj created at context-creation phase & hoisted with func-obj 
           

    way-2 : function expression

            -> Anonymous function
            -> func-obj created at context-execution phase & hoisted with undefined 


*/


//-----------------------------------------------------------

// way-1 : function declaration

// console.log(add(12, 12));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12, 12));

//-----------------------------------------------------------

// way - 2 : function expression


// var add = function (n1, n2) {
//     return n1 + n2;
// };
// console.log(add(12, 12));


//-----------------------------------------------------------



// var loggedIn = false;

// var func;

// if (loggedIn) {
//     func = function () {
//         console.log("Welcome");
//     }
// } else {
//     func = function () {
//         console.log("get out..");
//     };
// }

// func();

//-----------------------------------------------------------


// functions are objects , we can assign them to  variables


// function sayHello() {
//     console.log("Hello");
// }

// let sayHi = sayHello;

// sayHi();

//-----------------------------------------------------------

// functions as args


// function greet(f) {
//     if (f) {
//         f();
//         console.log("I a fine");
//         return;
//     }
//     console.log("Seasonal greetings");
// }

// // greet();
// greet(function () { console.log('GM'); return "How r u";});
// greet(function () { console.log('GA'); });
// greet(function () { console.log('GE'); });


// e.g

// let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10 ];


/*
    sort ==>
      step-1 : compare
      step-2 : swap     
*/


// arr.sort(function (a, b) { return b - a; });


//-----------------------------------------------------------

// functions as return


// function teach() {
//     console.log('teaching......');
//     let learn = function () {
//         console.log("learning after teach");
//     }
//     console.log('teaching......end');
//     return learn;
// }

// let learnFunc = teach();

// learnFunc();
// learnFunc();


//-----------------------------------------------------------


// // 
// function func(a,b,c) {
//     console.log(arguments[0]);
//     console.log(arguments[1])
//     console.log(arguments[2]);    ;
// }

// func(12,13,14);


//------------------------------------------------------------



// e.g

// function sum() {
//     let r = 0,
//         len = arguments.length,
//         i = 0;
//     while (i < len) {
//         r += arguments[i];
//         i++;
//     }
//     return r;
// }

//------------------------------------------------------------


// function getFood() {
//     return "No Food";
// }
// // let getFood = new Function();

// function getFood(pay) {
//     // return "mini Tiffin";
//     return pay;
// }
// // getFood = new Function();

// console.log(getFood());


//------------------------------------------------------------






//  ES5

// function func(a, b) {

//     // if (!a) {
//     //     a = 1;
//     // }
//     // if (!b) {
//     //     b = 2;
//     // }

//     a = a || 1;
//     b = b || 2;

//     console.log(a);
//     console.log(b);
// }



// func(undefined,20);


//------------------------------------------------------


// Es6 : function default params

// function func(a=1, b=2) {
//     console.log(a);
//     console.log(b);
// }



// func(undefined,20);

//------------------------------------------------------



// ES6 : Rest paramaters


function learn(mainSub, sub1, ...otherSubs) {
    console.log('learning ' + mainSub);
    console.log(Array.isArray(otherSubs));
    console.log(otherSubs);
}

learn('.js', "html", "css", "jquery", "angular");