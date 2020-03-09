import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftComponentmenuComponent } from './left-componentmenu.component';

describe('LeftComponentmenuComponent', () => {
  let component: LeftComponentmenuComponent;
  let fixture: ComponentFixture<LeftComponentmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftComponentmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftComponentmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



