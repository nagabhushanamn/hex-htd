import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCountComponent } from './display-count.component';

describe('DisplayCountComponent', () => {
  let component: DisplayCountComponent;
  let fixture: ComponentFixture<DisplayCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
