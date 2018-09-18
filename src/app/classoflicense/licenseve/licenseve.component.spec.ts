import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseveComponent } from './licenseve.component';

describe('LicenseveComponent', () => {
  let component: LicenseveComponent;
  let fixture: ComponentFixture<LicenseveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
