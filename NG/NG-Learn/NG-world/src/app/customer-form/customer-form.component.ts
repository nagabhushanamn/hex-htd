import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  constructor() { }

  customerModel: Customer;  // Data Model

  ngOnInit() {
    // initilize customer model 
    this.customerModel = new Customer('Nag', 'N');
  }


  handleSubmit(customerForm) {
    let formModel = customerForm.value;
    console.log(formModel);
    customerForm.reset();
  }

}
