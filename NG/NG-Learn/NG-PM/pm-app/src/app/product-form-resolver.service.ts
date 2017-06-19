import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';

@Injectable()
export class ProductFormResolverService {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRoute) {
  }

}
