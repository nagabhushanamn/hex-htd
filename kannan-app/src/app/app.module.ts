import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import {ChartModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { ItemService } from './item.service';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
