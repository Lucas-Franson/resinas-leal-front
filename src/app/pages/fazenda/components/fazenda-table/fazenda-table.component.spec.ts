import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendaTableComponent } from './fazenda-table.component';

describe('FazendaTableComponent', () => {
  let component: FazendaTableComponent;
  let fixture: ComponentFixture<FazendaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FazendaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FazendaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
