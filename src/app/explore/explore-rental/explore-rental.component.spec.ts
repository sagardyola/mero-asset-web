import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreRentalComponent } from './explore-rental.component';

describe('ExploreRentalComponent', () => {
  let component: ExploreRentalComponent;
  let fixture: ComponentFixture<ExploreRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
