import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaTableComponent } from './empresa-table.component';

describe('EmpresaTableComponent', () => {
  let component: EmpresaTableComponent;
  let fixture: ComponentFixture<EmpresaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
