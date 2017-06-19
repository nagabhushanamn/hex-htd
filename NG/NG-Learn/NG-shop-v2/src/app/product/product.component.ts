import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ProductService } from '../product.service';

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

  reviewForm: FormGroup;

  constructor(private fb: FormBuilder, private _productService: ProductService) { }

  changeTab(index, event) {
    event.preventDefault();

    if (index === 3) {
      this._productService.loadReviews(this.product.id)
        .subscribe((items) => {
          if (!this.product.reviews) {
            this.product.reviews = [...items];
          }
        })
    }

    this.currentTab = index;


  }

  isTabSelected(index) {
    return this.currentTab === index;
  }

  buyHandler() {
    this.buy.emit({ product: this.product }); // 
  }

  handleReviewSubmit() {
    if (this.reviewForm.invalid) return;

    this._productService.saveReview(this.product.id, this.reviewForm.value)
      .subscribe(review => {
        if (!this.product.reviews) {
          this.product.reviews = [...this.product.reviews, review];
        } else {
          this.product.reviews.push(review);
        }
      })

    this.reviewForm.reset();
  }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      stars: ['1', [Validators.required]],
      author: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      body: ['', [Validators.required]]
    });

    const authorControl = this.reviewForm.get('author');
    authorControl.valueChanges.subscribe(value =>
      this.setMessage(authorControl));

  }


  setMessage(c: AbstractControl): void {
    this.authorMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.authorMessage = Object.keys(c.errors).map(key =>
        this.validationMessages[key]).join(' ');
    }
  }

  authorMessage: string;


  private validationMessages = {
    required: 'Please enter author email.',
    pattern: 'Invalid Email'
  };

}
