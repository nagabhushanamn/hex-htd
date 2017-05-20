// syntax


// let getPrice = function () { return 100.00 };

//or

// sytax of arrow function

/*
    let var=()=>expression/body;
*/

//--------------------------------------------------

// let getPrice = () => 100.00;
// let getPrice = (count) => count*100.00;
// let getPrice = count => count * 100.00;
// let getPrice = (count,tax) => count*100.00+tax;
// let getPrice = (count, tax) => {
//     let cost = count * 100.00;
//     let withTax = cost + tax;
//     return withTax;
// };

//--------------------------------------------------

/*

advantages of arrow function
----------------------------

--> they always bound to current context's owner by default 
--> arrow functions are not bindable to any object dynamically

*/



// let trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");

//         // let askQues = function (ques) {
//         //     console.dir(this);
//         //     console.log(this.name + " anwering "+ques);
//         // }

//         // or

//         let askQues=(ques)=>{
//             console.dir(this);
//             console.log(this.name + " anwering "+ques);
//         }

//         console.log("teaching end");
//         return askQues;
//     }
// };

// let askQues = trainer.doTeach();
// askQues("ques-1");
// askQues("ques-2");

// let newTrainer = { name: 'Kannan' };
// askQues.call(newTrainer,"ques-3");


//------------------------------------------------------------





// let invoice = {
//     num: 123,
//     process: function () {
//         console.log(this.num + "-invoice processed");
//     }
// };

//-------

// let invoice = {
//     num: 123,
//     process: () => {
//         console.log(this.num + "-invoice processed");
//     }
// };

//-----------------------------


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log(this.num + "-invoice processed partially");
//         return () => {  console.log(this.num + "-invoice processed completely"); };
//     }
// };

// let func = invoice.process();
// // func();

// let newInvoice = { num: 321 };
// func.call(newInvoice);

//-------------------------------------


// let func = () => console.log(this);
// func();

// let p1 = {
//     name: 'Nag',
//     sayName: function () {
//         let func = () => console.log(this);
//         func();
//     }
// };



// p1.sayName();


//-------------------------------------




function Person(name, age) {
    this.name = name;
    this.age = age;

    // let self = this;    
    // setInterval(function () { 
    //     self.age++;
    //     console.log(self.name+"-->"+self.age);
    // },1000);    


    setInterval(() => {
        this.age++;
        console.log(this.age)
    }, 1000);

}
let p = new Person('Ria', 0);