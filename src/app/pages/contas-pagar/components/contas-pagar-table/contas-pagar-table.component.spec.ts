import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasPagarTableComponent } from './contas-pagar-table.component';

describe('ContasPagarTableComponent', () => {
  let component: ContasPagarTableComponent;
  let fixture: ComponentFixture<ContasPagarTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContasPagarTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContasPagarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
