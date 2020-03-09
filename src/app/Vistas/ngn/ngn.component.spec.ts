import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGNComponent } from './ngn.component';

describe('NGNComponent', () => {
  let component: NGNComponent;
  let fixture: ComponentFixture<NGNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
