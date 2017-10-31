import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxPageComponent } from './chat-box-page.component';

describe('ChatBoxPageComponent', () => {
  let component: ChatBoxPageComponent;
  let fixture: ComponentFixture<ChatBoxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBoxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
