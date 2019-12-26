import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plot2Component } from './plot2.component';

describe('Plot2Component', () => {
  let component: Plot2Component;
  let fixture: ComponentFixture<Plot2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plot2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
