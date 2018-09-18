import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseinfoComponent } from './licenseinfo.component';

describe('LicenseinfoComponent', () => {
  let component: LicenseinfoComponent;
  let fixture: ComponentFixture<LicenseinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
