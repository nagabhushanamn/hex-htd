//

// let arr = new Array();

// or

// let arr = [];

// arr.push("item-1");
// arr.push("item-2");

// let ele = arr.pop();

//------------------------------------------------------


let p1 = {
    id: 124,
    name: 'Laptop',
    price: 198000.00
};
let p2 = {
    id: 724,
    name: 'Mobile',
    price: 35000.00
};
let p3 = {
    id: 425,
    name: 'Product-3',
    price: 65000.00
};
let p4 = {
    id: 126,
    name: 'Product-4',
    price: 6000.00
};
let p5 = {
    id: 324,
    name: 'Product-5',
    price: 88000.00
};


//------------------------------------------------------

let products = [p1, p2, p3, p4, p5];

//-----------------------------------------------------

// A. filter

// let resultArray = products.filter(function (item) { return item.price > 35000 });
// resultArray.forEach(function (item) { console.log(item) });


// or

// let resultArray = products.filter((item) => item.price > 35000);
// resultArray.forEach((item) => console.log(item));

//-----------------------------------------------------

// B. map

// let resultArray = products.map(item => item.price);
// resultArray.forEach((item) => console.log(item));

//-----------------------------------------------------

// C. every

// let bo = products.every(item => item.price >= 10000);
// let bo = products.some(item => item.price >= 10000);
// console.log(bo);

//-----------------------------------------------------

// D.reduce

// let total=products.reduce((acc, item) => { 
//     console.log(`current item : ${item.name} , current total :${acc}}`);
//     return acc + item.price;
// },0);
// console.log(`total : ${total}`);


//-----------------------------------------------------

// let product = products.find(item => item.id === 124);
// console.log(product);


//-----------------------------------------------------

// let idx = products.findIndex(item => item.id === 124);
// console.log(idx);

//-----------------------------------------------------

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];
// let arr3 = [6, 7];

// let newArray=arr1.concat(arr2,arr3);

//-----------------------------------------------------


// let arr = ["A", "B", "C", "D"];
// let returnArray = arr.splice(0, 2);

//-----------------------------------------------------

// let arr = [1, 2, 3, 4, 5];
// let returnArray=arr.slice(0,2);

//-----------------------------------------------------


// quiz


let arr1 = [1, 2, 3];
let arr2 = [3, 4];

// compare 2 arrays , find/display difference of src array

// o/p ==> [1,2]

let result = [];
arr1.forEach(i => {
    if (arr2.indexOf(i)) {
        result.push(i);
    }
})
console.log(result);

//---------------------------------


//----------------------------------


// let arr = [1, 3, null, undefined, 8, "hello", false, NaN, 12.12, "", 0];

// // o/p ==> [1,3,8,"hello",12.12]

// arr.forEach(i => { if (i) { } })

//---------------------------------


let arr = [1, 2, 3, 4, 1, 2, 3, 1, 2];


/*

    unique elements ==> 1,2,4

    unique elements count

    1 ==> 3
    2 ==> 3
    3 ==> 2
    4 ==> 1 

*/





