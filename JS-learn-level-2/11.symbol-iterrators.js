


/*

    primitives
    ------------

    1. string
    2. number
    3. boolean
    4. undefined

    5. symbol ( new primitive from es6)

*/


// let s = Symbol.for("key-1");
// let s2 = Symbol.for("key-1");



// why/where we need symbols ?


// let emp1 = { name: 'Nag',[Symbol.for('java')]:"java,spring"};
// let emp2 = { name: 'Kannan',[Symbol.for('java')]:"java,bla"};
// let emp3 = { name: 'sambath', [Symbol.for('js')]: ".js,ngß" };

// if (emp3[Symbol.for('java')]) {
//     console.log('he is java employee');
// }


//-------------------------------------------------


// let arr = [12, 13];

//--------------------------------------------------



// let idMaker = {
//     [Symbol.iterator]() {
//         let id = 0;
//         return {
//             next() {
//                 ++id
//                 return {value:id>10?undefined:id,done:id>10?true:false};
//             }
//         }
//     }
// };


// ----------------------------------------- 

// for (let id of idMaker) {
//     console.log(id);
// }

// -----------------------------------------

// let [id1, id2, id3] = idMaker;

// -----------------------------------------

// let ids = [...idMaker];

//--------------------------------------


let p = { name: 'Nag' };
let { name: myName } = p;


