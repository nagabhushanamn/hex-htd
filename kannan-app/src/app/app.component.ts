import { Component } from '@angular/core';
import { ItemService } from './item.service';

import "bootstrap/dist/css/bootstrap.css";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private itemService: ItemService) { }

  items:Array<any>=[]

  ngOnInit() {
    this.itemService.loadItems()
      .subscribe(resp => this.items=resp.items)
  }

}
