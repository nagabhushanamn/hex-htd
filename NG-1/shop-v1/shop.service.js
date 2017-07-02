



// // Model
let items = [
    {
        name: 'Laptop',
        price: 19800,
        description: 'New mac pro',
        canBuy: true,
        notInStock: false,
        image: 'images/Laptop.png',
        makeDate: Date.now(),
        discount: 10000,
        reviews: [
            { stars: 4, author: 'nag@gmail.com', body: 'Good one' }
        ]
    },
    {
        name: 'Mobile',
        price: 1800,
        description: 'New mobile pro',
        canBuy: true,
        notInStock: false,
        image: 'images/Mobile.png',
        makeDate: Date.now(),
        reviews: [
            { stars: 4, author: 'nag@gmail.com', body: 'Good one' }
        ]
    }
];




// Services


/*


   a. mod.provider()  ==> provider with factory method
   
   // short-cuts

   b. mod.factory()
   c. mod.service()
   d. mod.value()
   e. mod.constant()


*/

let shopService = angular.module('shop.service', []);

shopService.factory('productService', function ($http) {

    let service = {
        loadAllProducts: function () {
            // api call
            //return $http.get('http://localhost:8080/api/products');
            return items;
        }
    };

    return service;

});
