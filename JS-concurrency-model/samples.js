
//------------------------------------

function foo(b) {
    var a = 10;
    return a + b + 11;
}

function bar(x) {
    var y = 3;
    return foo(x * y);
}

console.log(bar(7));

//------------------------------------


function foo() { }
function bar() { foo()}
function baz() { bar() }
baz();

//------------------------------------

function foo() { throw new Error('oops') }
function bar() { foo()}
function baz() { bar() }
baz();

//------------------------------------

function foo() { foo(); }
foo();


//------------------------------------

function longRunning() {
    var i = 0;
    while (i < 10) {
        console.log('good mng');
        i++;
    }
}

function shortRunning() {
    console.log('Hey');
}

longRunning();
shortRunning();

//------------------------------------

//

/*

    <button class="me"> button-1 </button>
    <button class="you"> button-2 </button>

*/

console.log('start...');

$.on('.me', 'click', function handler1(event) { 
    console.log('Hadling click event on .me elements');
});

$.on('.you', 'click', function handler2(event) { 
    console.log('Hadling click event on .you elements');
});

console.log('cont with other work');

function longRunning() {
    var i = 0;
    while (i < 10) {
        console.log('good mng');
        i++;
    }
}
longRunning();


//------------------------------------

console.log('start..');

setTimeout(function to1() { 
    console.log('after timeout...');
}, 0);

function longRunning() {
    var i = 0;
    while (i < 10) {
        console.log('good mng');
        i++;
    }
}
longRunning();