import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
    <header>
      <nav class="navbar navbar-default">
        <div class="navbar-header">
          <div><a class="navbar-brand">{{title}}</a></div>
        </div>
      </nav>
    </header>

    <div class="container">
       <div class="list-group">
        <div *ngFor="let prod of products|slice:0:10;let idx=index;" class="list-group-item">
          <app-product [product]="prod" [index]="idx" (buy)="addToCart($event)"></app-product>
        </div>
       </div>
    </div>
   
 `
})
export class AppComponent {

  title: string = 'NG-shop-v1';
  
  // loaded from api-call
  products: Array<any> = [
    {
      name: 'Laptop',
      price: 198000,
      discount:10000,
      description: 'New Model',
      canBuy: true,
      makeDate:Date.now(),  // timestamp
      images: [
        { thumb: '', full: 'images/Laptop.png' }
      ],
      reviews:[
        {stars:5,author:'nag@gmail.com',body:'This is good laptop, recommanding others'},
        {stars:2,author:'kannan@gmail.com',body:'costly...'}
      ]
    },
    {
      name: 'Mobile',
      price: 18000,
      description: 'New Model',
      canBuy: true,
      makeDate:Date.now(),  // timestamp
      images: [
        { thumb: '', full: 'images/Mobile.png' }
      ],
      reviews:[
        {stars:5,author:'nag@gmail.com',body:'This is good mobile, recommanding others'},
        {stars:2,author:'kannan@gmail.com',body:'costly...'}
      ]
    }
  ];

  addToCart(event) {
    console.log(event.product.name + "added to cart");
  }
}
