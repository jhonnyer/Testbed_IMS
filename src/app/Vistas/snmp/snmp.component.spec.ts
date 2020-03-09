import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SNMPComponent } from './snmp.component';

describe('SNMPComponent', () => {
  let component: SNMPComponent;
  let fixture: ComponentFixture<SNMPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SNMPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SNMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
