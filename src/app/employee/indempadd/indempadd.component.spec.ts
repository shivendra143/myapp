import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndempaddComponent } from './indempadd.component';

describe('IndempaddComponent', () => {
  let component: IndempaddComponent;
  let fixture: ComponentFixture<IndempaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndempaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndempaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
