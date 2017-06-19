import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PriceDiscountPipe } from './pipes/price-discount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PriceDiscountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
