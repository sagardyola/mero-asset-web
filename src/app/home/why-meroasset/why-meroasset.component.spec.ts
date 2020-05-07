import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMeroassetComponent } from './why-meroasset.component';

describe('WhyMeroassetComponent', () => {
  let component: WhyMeroassetComponent;
  let fixture: ComponentFixture<WhyMeroassetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyMeroassetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyMeroassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
