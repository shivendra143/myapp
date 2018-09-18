import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopempaddComponent } from './copempadd.component';

describe('CopempaddComponent', () => {
  let component: CopempaddComponent;
  let fixture: ComponentFixture<CopempaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopempaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopempaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
