import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavRentalComponent } from './sidenav-rental.component';

describe('SidenavRentalComponent', () => {
  let component: SidenavRentalComponent;
  let fixture: ComponentFixture<SidenavRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
