import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plot1Component } from './plot1.component';

describe('Plot1Component', () => {
  let component: Plot1Component;
  let fixture: ComponentFixture<Plot1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plot1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
