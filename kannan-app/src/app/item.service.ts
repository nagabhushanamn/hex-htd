import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

  constructor(private http: Http) { }

  loadItems(){
    return this.http.get('mock-data/data.json')
      .map(response => response.json())
  }

}
