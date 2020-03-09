import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NFVComponent } from './nfv.component';

describe('NFVComponent', () => {
  let component: NFVComponent;
  let fixture: ComponentFixture<NFVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NFVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NFVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
