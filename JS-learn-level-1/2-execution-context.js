/*

    Execution-Context / scope
    -------------------------

   ==> memory/stack-frame with args & locals to execute ur instructions

   phase-1 : creation

   -> all variables declared any-where with 'var' keyword will get hoisted to top
    with default value ( undefined)

   phase-2 : execution

   -> instruction will get execute in seq.


    ---------------------------------------------------------

    .js-runtime has one global-context & global-obj by default


    global-obj
    ----------

    browser-envi  ==> window
    Node.js       ==> global


    any context always executed by object

    ----------------------------------------------------------


    imp-note : every func invocation also creates new-context
    which is child of context in which func has declared


*/


// var a = 12;
// console.log(a);


// ----------------------------------------------------------

// var v = 12;
// function func1() {
//     /*
//         var v=undefined;
//     */
//     console.log(v);
//     var v = 13;
// }
// func1();  // f1-context(scope) ===> global-context(scope)


// ----------------------------------------------------------


// var v = 12;

// function f1() {

//     function f2() {
//         console.log(v);
//     }
//     var v = 13;
//     // f2(); // f2-context ==> f1-context
//     return f2;
// }

// var f2Func = f1(); // f1-context  ==> global-context

// f2Func();  // f2-context ==> f1-context

//----------------------------------------------------------

/*

 // problems declaring variables with 'var' keyword

  ==> they always get hoist
  ==> they are not block-scoped
  ==> we re-declare same variable many times in a context

*/


// var v = 100;
// {
//     var v = 200;
// }
// console.log(v);

// function func() {
//     for (var i = 0; i < 10; i++) {}
// }

// func();

// var a = 12;
// var a = 13;

//----------------------------------------------------------


// soln : by using 'let' & 'const' keywords from Es6



// console.log(v);
// let v = 12;



// var i = 100;
// {
//     let i = 200;
// }
// console.log(i);


// let a = 12;
// var a = 13;

//---------------------------------------------



// const trainer = {
//     name:'Nag'
// };


// trainer.name = "Kannan";

// // trainer = {};


//-------------------------------------------


// let v = 12;
// v = 13;
// v = 14;

// const PI = 3.14;
// const nagPerson = {
//     name: 'Nag',
//     age: 33
// };
// nagPerson.address = "Universe";


// let v = 12;
// const vv = v;

