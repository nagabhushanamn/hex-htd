import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: any;

  @Input()
  index: number;

  @Output()
  buy = new EventEmitter();

  currentTab: number = 1;

  constructor() { }

  changeTab(index, event) {
    event.preventDefault();
    this.currentTab = index;
  }

  isTabSelected(index) {
    return this.currentTab === index;
  }

  buyHandler() {
    this.buy.emit({ product: this.product }); // 
  }

  handleReviewSubmit(reviewForm) {
    if(reviewForm.invalid)return;
    this.product.reviews.push(reviewForm.value);
    reviewForm.reset();
  }

  ngOnInit() {
  }

}
