import { Component } from '@angular/core';

@Component({
    selector: 'my-shop-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    name: string = "NG shop-IT";

    // loaded from api-call
    products: any = [
        {
            name: 'Laptop',
            price: 198000,
            description: 'New mac pro',
            canBuy: true
        },
        {
            name: 'Mobile',
            price: 18000,
            description: 'New mobile',
            canBuy: true
        }
    ];

}

// export { AppComponent }