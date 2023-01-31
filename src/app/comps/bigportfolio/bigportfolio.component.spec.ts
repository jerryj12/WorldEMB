import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigportfolioComponent } from './bigportfolio.component';

describe('BigportfolioComponent', () => {
  let component: BigportfolioComponent;
  let fixture: ComponentFixture<BigportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigportfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
