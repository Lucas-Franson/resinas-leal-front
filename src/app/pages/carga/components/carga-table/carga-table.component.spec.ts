import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaTableComponent } from './carga-table.component';

describe('CargaTableComponent', () => {
  let component: CargaTableComponent;
  let fixture: ComponentFixture<CargaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
