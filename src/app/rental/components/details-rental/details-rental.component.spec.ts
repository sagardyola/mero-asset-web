import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRentalComponent } from './details-rental.component';

describe('DetailsRentalComponent', () => {
  let component: DetailsRentalComponent;
  let fixture: ComponentFixture<DetailsRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
