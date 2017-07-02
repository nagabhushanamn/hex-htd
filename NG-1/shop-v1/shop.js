


let shopModule = angular.module('shop', ['shop.service']);

// Controller

shopModule.controller('ShopController', function ($scope, productService) {
    // load or create model
    //this.product = item;
    //$scope.products = items;  // ViewModel
    $scope.products = productService.loadAllProducts();
    // productService.loadAllProducts().then(resp => {
    //     $scope.products = resp;
    // });
});

shopModule.controller('TabsController', function ($scope) {
    $scope.tab = 1;
    $scope.changeTab = function (tabIndex) {
        $scope.tab = tabIndex;
    }
    $scope.isTabSelected = function (tabIndex) {
        return $scope.tab === tabIndex;
    }
});
shopModule.controller('ReviewFormController', function ($scope) {
    $scope.newReview = {};
    $scope.addReview = function (product) {
        product.reviews.push($scope.newReview);
        $scope.newReview = {};
    }
})


// Filters / Pipes
shopModule.filter('priceDiscount', function () {
    return function (originalPrice, discount) {
        if (discount) return originalPrice - discount;
        return originalPrice - 1;
    }
});



// Directives ==> Components

shopModule.directive('productTitle', function () {
    return {
        restrict: 'E',
        templateUrl: './templates/product-title.html'
    }
});

shopModule.directive('productTabs', function () {
    return {
        restrict: 'E',
        templateUrl: './templates/product-tabs.html'
    }
});

shopModule.directive('productReviewForm', function () {
    return {
        restrict: 'E',
        templateUrl: './templates/product-review-form.html'
    }
});


