import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayCountComponent } from './display-count/display-count.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCountComponent,
    HitButtonComponent,
    CustomerFormComponent,
  ],  
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
