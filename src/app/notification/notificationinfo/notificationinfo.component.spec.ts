import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationinfoComponent } from './notificationinfo.component';

describe('NotificationinfoComponent', () => {
  let component: NotificationinfoComponent;
  let fixture: ComponentFixture<NotificationinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
