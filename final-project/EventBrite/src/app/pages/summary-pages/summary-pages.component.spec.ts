import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPagesComponent } from './summary-pages.component';

describe('SummaryPagesComponent', () => {
  let component: SummaryPagesComponent;
  let fixture: ComponentFixture<SummaryPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
