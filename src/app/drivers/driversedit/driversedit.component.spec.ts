import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverseditComponent } from './driversedit.component';

describe('DriverseditComponent', () => {
  let component: DriverseditComponent;
  let fixture: ComponentFixture<DriverseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
