import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: any;

  currentTab: number = 1;

  constructor() { }

  changeTab(index, event) {
    event.preventDefault();
    this.currentTab = index;
  }
  isTabSelected(index) {
    return this.currentTab === index;
  }

  ngOnInit() {
  }

}
