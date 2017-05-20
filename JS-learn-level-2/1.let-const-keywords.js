//-----------------------------------

// let v = 12;
// console.log(v);

// {
//     let i = 12;
// }


// // let v = 12;

//-----------------------------------

// const PI = 3.14;
// const nag = { name: 'Nagabhushanam' };

//-----------------------------------


// challenge


var myFuncs = [];


// function getF(i) {
//     return function () {
//         return i
//     };
// }

// es5

// for (var i = 0; i < 2; i++) {
//     myFuncs.push((function (i) { return function () { return i;} })(i));
// }


// es6

for (let i = 0; i < 2; i++) {
    myFuncs.push(function () {
        return i;
    });
}

console.log(myFuncs[0]());
console.log(myFuncs[1]());