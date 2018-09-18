import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityinfoComponent } from './cityinfo.component';

describe('CityinfoComponent', () => {
  let component: CityinfoComponent;
  let fixture: ComponentFixture<CityinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
