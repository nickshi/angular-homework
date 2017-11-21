import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEventCardComponent } from './profile-event-card.component';

describe('ProfileEventCardComponent', () => {
  let component: ProfileEventCardComponent;
  let fixture: ComponentFixture<ProfileEventCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEventCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
