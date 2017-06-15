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
        <div *ngFor="let prod of products;let idx=index;" class="list-group-item">
          <app-product [product]="prod"></app-product>
        </div>
       </div>
    </div>
   
 `
})
export class AppComponent {

  title: string = 'NG-shop-v1';
  
  products: Array<any> = [
    {
      name: 'Laptop',
      price: 198000,
      description: 'New Model',
      canBuy: true,
      images: [
        { thumb: '', full: 'images/Laptop.png' }
      ]
    },
    {
      name: 'Mobile',
      price: 18000,
      description: 'New Model',
      canBuy: true,
      images: [
        { thumb: '', full: 'images/Mobile.png' }
      ]
    }
  ];
}
