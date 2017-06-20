import { Component } from '@angular/core';
import { StoryService } from './story-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'story-app';
  stories: Array<any> = [];
  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.stories = this.storyService.getAllStories();
  }

  addNewStory(event) {
    let story = Object.assign({}, event.data, { id: Math.random() * 100 });
    this.stories.push(story);
  }

}
