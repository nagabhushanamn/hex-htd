/*
    A closure is a function having access to the parent scope,
    even after the parent function has closed.
*/

// function teach(sub) {
//     console.log('teaching ' + sub);
//     let notes = sub + " notes";
//     let stories = "bla bla";
//     function learn() {
//         console.log('learning with ' + notes);
//     }
//     //learn();
//     console.log('teaching end..');
//     return learn;
// }

// let learnFunc = teach('.js'); // teach-context created & closed

// learnFunc();
// learnFunc();

//--------------------------------------------

// why/where we need closures?


/*
    --> to abstract public-behav of any module
    --> while executing func async, to access parenct-scoped data
    
*/


// --> to abstract public-behav of any module


// e.g counter module


// let count = 0;
// function doCount() {
//     count++;
// }
// function getCount() {
//     return count;
// }


//-----

// function doCount() {
//     let count = 0;
//     count++;
// }
// function getCount(){
//     return count;
// }


//-----


const counter=(function() {

    let count = 0; // private

    // public    
    function doCount() {
        count++;
    }

    function getCount() {
        return count;
    }

    return {
        doCount,
        getCount
    };

})();

// let counter = init();
// let counter2 = init();