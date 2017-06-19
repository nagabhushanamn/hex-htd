

let swiggy = {
    getFood() {
        let promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                console.log('resolving swiggy promise...');
                resolve('Biryani.........');
                //reject('Delivery boys busy.........');
            }, 5000)

        });
        return promise;
    }
}

let bar = {
    getDrink() {
        let promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                console.log('resolving bar promise...');
                resolve('Beer.....');
                //reject('Delivery boys busy.........');
            }, 1000)

        });
        return promise;
    }
}


let person = {
    doWork() {

        console.log('person working....');
        console.log('feeling hungry.....requesting swiggy for food');

        // let promise1 = swiggy.getFood(); //..
        // let promise2 = bar.getDrink(); //..
        // console.log('got promise...deffering actiosn to future');

        // Promise.race([promise1,promise2]).then((partyItems) => {
        //     console.log('yummy...' + partyItems);
        // }, (reason) => {
        //     console.log('ooops ' + reason);
        // });

        let promise = swiggy.getFood();

        let newPromise = promise.then((food) => {
            console.log("yummy with " + food);
            console.log('givng half to other..');
            return "half=biryani";
        });


        newPromise.then((halfFood) => {
            console.log('yummy with ' + halfFood);
        });


        console.log('cont with other work........all work done..');
    }
}

person.doWork();