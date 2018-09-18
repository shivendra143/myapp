import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeassagemanagementinfoComponent } from './meassagemanagementinfo.component';

describe('MeassagemanagementinfoComponent', () => {
  let component: MeassagemanagementinfoComponent;
  let fixture: ComponentFixture<MeassagemanagementinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeassagemanagementinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeassagemanagementinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
