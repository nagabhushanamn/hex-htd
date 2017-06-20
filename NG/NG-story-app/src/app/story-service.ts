import { Injectable } from '@angular/core';

@Injectable()
export class StoryService {

  stories: Array<any> = [
    { id: 1, name: 'Nag', body: 'story from Nag' },
    { id: 2, name: 'Kannan', body: 'story from Kannan' }
  ];

  constructor() { }

  getAllStories() {
    return this.stories;
  }

}
