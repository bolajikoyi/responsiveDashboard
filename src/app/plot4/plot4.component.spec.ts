import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plot4Component } from './plot4.component';

describe('Plot4Component', () => {
  let component: Plot4Component;
  let fixture: ComponentFixture<Plot4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plot4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plot4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
