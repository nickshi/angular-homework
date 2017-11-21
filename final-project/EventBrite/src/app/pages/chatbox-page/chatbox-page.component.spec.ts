import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatboxPageComponent } from './chatbox-page.component';

describe('ChatboxPageComponent', () => {
  let component: ChatboxPageComponent;
  let fixture: ComponentFixture<ChatboxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatboxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatboxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
