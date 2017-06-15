import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
    <header>
      <nav class="navbar navbar-default">
        <div class="navbar-header">
          <div><a class="navbar-brand">{{title}}</a></div>
        </div>
      </nav>
    </header>

    <div class="container">

      <app-hit-button incBy="1" (mohanEvent)="incrementCount($event)"></app-hit-button>
      <app-hit-button incBy="10" (hit)="incrementCount($event)"></app-hit-button>
      <app-hit-button incBy="100" (hit)="incrementCount($event)"></app-hit-button>
      
      <hr/>
      <app-display-count [value]="totalCount"></app-display-count>

    </div>

 `
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
