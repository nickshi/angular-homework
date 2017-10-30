import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleButtonsComponent } from './double-buttons.component';

describe('DoubleButtonsComponent', () => {
  let component: DoubleButtonsComponent;
  let fixture: ComponentFixture<DoubleButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
