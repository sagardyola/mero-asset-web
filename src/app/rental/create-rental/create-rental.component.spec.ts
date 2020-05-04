import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRentalComponent } from './create-rental.component';

describe('CreateRentalComponent', () => {
  let component: CreateRentalComponent;
  let fixture: ComponentFixture<CreateRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
