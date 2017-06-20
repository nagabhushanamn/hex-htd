import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent implements OnInit {

  show: boolean = false;
  storyForm: FormGroup;

  @Output()
  story = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.storyForm = this.fb.group({
      name: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  toggleShow() {
    this.show = !this.show;
  }

  onSubmit() {
    if (this.storyForm.valid) {
      this.story.emit({ data: this.storyForm.value });
      this.storyForm.reset();
      this.show = false;
    }
  }

}
