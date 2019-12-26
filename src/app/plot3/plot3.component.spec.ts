import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plot3Component } from './plot3.component';

describe('Plot3Component', () => {
  let component: Plot3Component;
  let fixture: ComponentFixture<Plot3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plot3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plot3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
