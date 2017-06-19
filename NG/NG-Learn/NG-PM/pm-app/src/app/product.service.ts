import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs';


@Injectable()
export class ProductService {

  apiURL: string = "http://localhost:8080/api/products";

  constructor(private http: Http) { }


  loadAllProducts() {
    return this.http.get(this.apiURL)
      .map(response => response.json())
      .catch(this.handleError);
  }
  loadProduct(id) {
    return this.http.get(this.apiURL + "/" + id)
      .map(response => response.json())
      .catch(this.handleError);
  }

  saveProduct(product) {
    product = Object.assign({}, product, { makeDate: Date.now() })
    return this.http.post(this.apiURL, product)
      .map(response => response.json())
      .catch(this.handleError);
  }
  updateProduct(product) {
    return this.http.put(this.apiURL + "/" + product.id, product)
      .map(response => response.json())
      .catch(this.handleError);
  }

  deleteProduct(id) {
    return this.http.delete(this.apiURL + "/" + id)
      .map(response => response.json())
      .catch(this.handleError);
  }

  handleError(error) {
    return Observable.throw({ message: '' });
  }

}
