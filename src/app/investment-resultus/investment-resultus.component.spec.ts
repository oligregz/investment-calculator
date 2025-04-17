import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentResultusComponent } from './investment-resultus.component';

describe('InvestmentResultusComponent', () => {
  let component: InvestmentResultusComponent;
  let fixture: ComponentFixture<InvestmentResultusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentResultusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentResultusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
