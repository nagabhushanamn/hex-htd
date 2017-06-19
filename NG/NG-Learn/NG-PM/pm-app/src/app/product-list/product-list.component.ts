import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'lodash';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products: Array<any> = [];

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.products = data.products;
    })
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id)
      .subscribe(resp => {
        let idx = _.findIndex(this.products, function (prod) {
          return prod.id === id;
        });
        this.products.splice(idx, 1);
      })
  }
  editProduct(id) {
    this.router.navigate(['product-edit', id])
  }



}
