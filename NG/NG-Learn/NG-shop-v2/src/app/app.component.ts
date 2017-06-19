import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponent {

  title: string = 'NG-shop-v1';

  products: Array<any> = [];

  constructor(private _productSerice: ProductService) { }

  addToCart(event) {
    console.log(event.product.name + " added to cart");
  }

  ngOnInit() {
    this._productSerice.loadProducts()
      .subscribe((items) => {
        this.products = items;
      })
  }



}
