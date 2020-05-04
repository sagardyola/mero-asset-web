import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRentalComponent } from './remove-rental.component';

describe('RemoveRentalComponent', () => {
  let component: RemoveRentalComponent;
  let fixture: ComponentFixture<RemoveRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
