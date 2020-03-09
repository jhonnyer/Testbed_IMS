import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RighComponentbodyComponent } from './righ-componentbody.component';

describe('RighComponentbodyComponent', () => {
  let component: RighComponentbodyComponent;
  let fixture: ComponentFixture<RighComponentbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RighComponentbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RighComponentbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
