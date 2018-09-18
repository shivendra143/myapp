import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentmanagementinfoComponent } from './contentmanagementinfo.component';

describe('ContentmanagementinfoComponent', () => {
  let component: ContentmanagementinfoComponent;
  let fixture: ComponentFixture<ContentmanagementinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentmanagementinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentmanagementinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
