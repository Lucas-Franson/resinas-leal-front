import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasReceberTableComponent } from './contas-receber-table.component';

describe('ContasReceberTableComponent', () => {
  let component: ContasReceberTableComponent;
  let fixture: ComponentFixture<ContasReceberTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContasReceberTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContasReceberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
