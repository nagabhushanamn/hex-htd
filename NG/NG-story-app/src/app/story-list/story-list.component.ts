import { Component, OnInit, Input } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  constructor() { }

  @Input()
  stories: Array<any> = [];

  ngOnInit() {
  }

  deleteStory(id) {
    let idx = _.findIndex(this.stories, story => story.id === id);
    this.stories.splice(idx, 1);
  }

}
