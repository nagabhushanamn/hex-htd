import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoryFormComponent } from './story-form/story-form.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryComponent } from './story/story.component';
import { StoryService } from './story-service';


@NgModule({
  declarations: [
    AppComponent,
    StoryFormComponent,
    StoryListComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
