import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayCountComponent } from './display-count/display-count.component';
import { HitButtonComponent } from './hit-button/hit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCountComponent,
    HitButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
