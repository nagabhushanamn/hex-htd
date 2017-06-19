import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable()
export class ProductListResolverService {
  
  constructor(private productService: ProductService) { }

  resolve() {
    return this.productService.loadAllProducts()
  }

}
