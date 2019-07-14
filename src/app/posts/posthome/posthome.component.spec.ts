import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosthomeComponent } from './posthome.component';

describe('PosthomeComponent', () => {
  let component: PosthomeComponent;
  let fixture: ComponentFixture<PosthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
