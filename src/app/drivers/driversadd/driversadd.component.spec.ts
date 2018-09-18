import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversaddComponent } from './driversadd.component';

describe('DriversaddComponent', () => {
  let component: DriversaddComponent;
  let fixture: ComponentFixture<DriversaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
