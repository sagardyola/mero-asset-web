import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveRentalComponent } from './save-rental.component';

describe('SaveRentalComponent', () => {
  let component: SaveRentalComponent;
  let fixture: ComponentFixture<SaveRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
