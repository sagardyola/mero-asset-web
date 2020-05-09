import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRentalComponent } from './main-rental.component';

describe('MainRentalComponent', () => {
  let component: MainRentalComponent;
  let fixture: ComponentFixture<MainRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
