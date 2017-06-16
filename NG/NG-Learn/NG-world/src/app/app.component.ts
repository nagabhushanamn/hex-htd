import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent implements OnInit {

  title: string = 'NG-Learn';

  totalCount: number = 100;

  constructor() {
    //console.log('AppComponent instantiated..');
  }

  ngOnInit() {
    //console.log('AppComponent Initialized...');
    // setInterval(() => {
    //   this.totalCount++;
    // }, 1000);
  }

  incrementCount(event) {
    console.log('AppComponent handling kick-event on HitButtonComponent');
    this.totalCount += +event.value;
  }

}
