import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIngresoComponent } from './login-ingreso.component';

describe('LoginIngresoComponent', () => {
  let component: LoginIngresoComponent;
  let fixture: ComponentFixture<LoginIngresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginIngresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
