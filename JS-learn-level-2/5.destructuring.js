

// A. Array Destructuring


// let arr = [10, 20, 30];

// let min = arr[0];
// let avg = arr[1];
// let max = arr[2];


// Es6

// let [min, avg, max] = arr;

//---------------------------------------


// let arr = [10, 20, 30];

// // let [min, avg] = arr;
// let [min, ,max] = arr

//---------------------------------------

// let nums = [10, 20];
// let [minimum, average, maximum=400] = nums;

//---------------------------------------


// let nums = [1, 2, 3];

// let a, b, c;

// [a, b, c] = nums;

//---------------------------------------



// Object destructuruing


let person = {
    name: 'Nag',
    age: 33,
    sayName: function () {
        console.log('im '+this.name);
    }
};

// let name = person.name;
// let age = person.age;

// let { name, age ,sayName} = person;

// let { name: myName, age: myAge } = person;

let myName;
let myAge;

//  ({ name: myName, age: myAge } = person);


let name, age;
({ name, age }=person);

