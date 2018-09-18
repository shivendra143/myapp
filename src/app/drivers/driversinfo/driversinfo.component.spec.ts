import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversinfoComponent } from './driversinfo.component';

describe('DriversinfoComponent', () => {
  let component: DriversinfoComponent;
  let fixture: ComponentFixture<DriversinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
