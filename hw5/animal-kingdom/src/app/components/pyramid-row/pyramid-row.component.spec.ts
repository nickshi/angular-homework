import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidRowComponent } from './pyramid-row.component';

describe('PyramidRowComponent', () => {
  let component: PyramidRowComponent;
  let fixture: ComponentFixture<PyramidRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyramidRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyramidRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
