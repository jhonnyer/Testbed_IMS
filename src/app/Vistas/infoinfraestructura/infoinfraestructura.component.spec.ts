import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoinfraestructuraComponent } from './infoinfraestructura.component';

describe('InfoinfraestructuraComponent', () => {
  let component: InfoinfraestructuraComponent;
  let fixture: ComponentFixture<InfoinfraestructuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoinfraestructuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoinfraestructuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
