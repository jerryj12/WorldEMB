import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpricingComponent } from './mainpricing.component';

describe('MainpricingComponent', () => {
  let component: MainpricingComponent;
  let fixture: ComponentFixture<MainpricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
