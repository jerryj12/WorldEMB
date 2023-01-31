import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpricingComponent } from './newpricing.component';

describe('NewpricingComponent', () => {
  let component: NewpricingComponent;
  let fixture: ComponentFixture<NewpricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
