import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwithcasedemoComponent } from './swithcasedemo.component';

describe('SwithcasedemoComponent', () => {
  let component: SwithcasedemoComponent;
  let fixture: ComponentFixture<SwithcasedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwithcasedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwithcasedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
