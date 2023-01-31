import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorpricingComponent } from './vectorpricing.component';

describe('VectorpricingComponent', () => {
  let component: VectorpricingComponent;
  let fixture: ComponentFixture<VectorpricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VectorpricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectorpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
