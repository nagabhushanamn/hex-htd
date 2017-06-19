import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  loadProducts() {

    let apiUrl = "http://localhost:8080/api/products";

    // let stream: Observable<Response> = this._http.get(apiUrl)
    // let newStream = stream.map(resp => resp.json())

    //return newStream;

    return this._http.get(apiUrl)
      .map(resp => resp.json())
      .catch(this.handleError);

  }


  loadReviews(productId) {
    let apiUrl = `http://localhost:8080/api/products/${productId}/reviews`;
    return this._http.get(apiUrl)
      .map(resp => resp.json())
      .catch(this.handleError);
  }


  saveReview(productId,review) {
    let apiUrl = `http://localhost:8080/api/products/${productId}/reviews`;
    return this._http.post(apiUrl, review)
      .map(resp => resp.json())
      .catch(this.handleError);
  }

  public handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

}
