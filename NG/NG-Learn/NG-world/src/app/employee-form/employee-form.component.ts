import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee';
import 'rxjs/add/operator/debounceTime';


import { rangeValidator, emailsMatch } from '../custom-validators'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  employeeForm: FormGroup; // Form Model
  employee: Employee;       // Data Model


  firstNameErrorMessage: string = '';

  ngOnInit() {

    // this.employeeForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   email: new FormControl(''),
    //   sendCatalog: new FormControl(false)
    // });

    // or

    // this.employeeForm = this.fb.group({
    //   firstName: '',
    //   lastName: '',
    //   email: 'me@mail.com',
    //   sendCatalog: true
    // });

    // or

    this.employeeForm = this.fb.group({
      // firstName:'', 
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      // lastName:'', 
      lastName: [''],
      //email:'',
      //email: {value:'me@mail.com',disabled:true},
      //email: [{value:'me@mail.com',disabled:true}],

      emailGroup: this.fb.group({
        email: ['', Validators.required],
        confEmail: ['', Validators.required]
      }, { validator: emailsMatch }),

      mobile: [''],
      notification: 'email',
      sendCatalog: true,
      range: ['', [Validators.required, rangeValidator(10, 20)]]
    });

    this.employeeForm.get('firstName').valueChanges
    .debounceTime(1000)
    .subscribe(event => {
      console.log(event);
      let control = this.employeeForm.get('firstName');

      if (control.invalid) {
        if (control.errors.minlength) {
          this.firstNameErrorMessage = "> 3 chars";
        } else {
          this.firstNameErrorMessage = '';
        }
      }

    })

    this.employeeForm.get('firstName').statusChanges
    .subscribe(event=>{
      console.log(event);
    })


    this.employee = new Employee('', '', '', false);
  }


  toggleNotification(mode) {
    let mobileFormControl = this.employeeForm.get('mobile');
    if (mode === "sms") {
      mobileFormControl.setValidators([Validators.required]);
    } else {
      mobileFormControl.clearValidators();
    }
    mobileFormControl.updateValueAndValidity();
  }

  loadEmployee() {

    // from api call
    //this.employee = new Employee("Nag", "N", "nag@email.com", true); // data-model
    // this.employeeForm.setValue(this.employee);

    // let dataModel = {
    //   firstName: 'Nag',
    //   lastName: 'N'
    // };

    // this.employeeForm.patchValue(dataModel);


  }

}
