import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaTableComponent } from './caixa-table.component';

describe('CaixaTableComponent', () => {
  let component: CaixaTableComponent;
  let fixture: ComponentFixture<CaixaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaixaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaixaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
