import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;

  product: any;


  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    let productId = this.route.snapshot.params['id'];

    this.productForm = this.fb.group({
      name: '',
      price: '',
      description: ''
    });

    if (productId) {
      this.productService.loadProduct(productId)
        .subscribe(item => {
          this.product = item;
          this.productForm.patchValue(this.product);
        })
    }

  }

  handleSubmit() {
    if (!this.product) {
      this.productService.saveProduct(this.productForm.value)
        .subscribe(product => {
          this.router.navigate(['products'])
        })
    } else {
      let product = Object.assign({}, this.product, this.productForm.value);
      this.productService.updateProduct(product)
        .subscribe(product => {
          this.router.navigate(['products'])
        })
    }
  }

  goBack() {
    this.router.navigate(['products']);
  }

}
