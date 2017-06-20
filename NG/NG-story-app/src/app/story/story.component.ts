import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  @Input()
  story: any;

  @Output()
  delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(id) {
    this.delete.emit(id);
  }

}
