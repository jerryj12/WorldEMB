import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepricingComponent } from './homepricing.component';

describe('HomepricingComponent', () => {
  let component: HomepricingComponent;
  let fixture: ComponentFixture<HomepricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
