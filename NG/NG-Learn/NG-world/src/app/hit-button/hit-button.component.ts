import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hit-button',
  templateUrl: './hit-button.component.html',
  styleUrls: ['./hit-button.component.css']
})
export class HitButtonComponent implements OnInit {

  @Input()
  incBy: number;

  @Output()
  hit = new EventEmitter();


  ngOnInit() {
  }

  handleClick() {
    console.log('HitButton comp emitted kick-event(output)');
    this.hit.emit({value:this.incBy});
  }

}
