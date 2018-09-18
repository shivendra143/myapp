import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmanagementinfoComponent } from './adminmanagementinfo.component';

describe('AdminmanagementinfoComponent', () => {
  let component: AdminmanagementinfoComponent;
  let fixture: ComponentFixture<AdminmanagementinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmanagementinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmanagementinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
