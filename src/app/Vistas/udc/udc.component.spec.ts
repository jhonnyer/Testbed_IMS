import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDCComponent } from './udc.component';

describe('UDCComponent', () => {
  let component: UDCComponent;
  let fixture: ComponentFixture<UDCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
