var Rx = require('rxjs/Rx');


//


// const observableStream = Rx.Observable.create((observer) => {
//     setInterval(function () {
//         observer.next('hello..'); // event...
//     }, 2000);
// });


// observableStream.subscribe((event) => {
//     console.log("subscribed..." + event);
// });

//----------------------------------------------------------


// let stream = Rx.Observable.range(1, 100)
//     .filter(x => x % 10 === 0)
//     .map(x => x - 10)




// let sub = stream.subscribe(ele => {
//     console.log(ele)
//     // if(ele===50)
//         //sub.unsubscribe();
// });






let stream = Rx.Observable.range(1, 10);

let stream1  =stream.filter(x => { console.log('filtering '+x); return x % 2 === 0 })
                    .map(x => { console.log('mapping '+x); return x * x });


let stream2  =stream.filter(x => { console.log('filtering '+x); return x % 2 !== 0 })
                    .map(x => { console.log('mapping '+x); return x * x });


stream1.subscribe(x=>console.log("sub1 : " +x));


stream2.subscribe(x=>console.log("sub2 : "+x));

//----------------------------------------------------------------