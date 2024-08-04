import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContasPagarComponent } from './add-contas-pagar.component';

describe('AddContasPagarComponent', () => {
  let component: AddContasPagarComponent;
  let fixture: ComponentFixture<AddContasPagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddContasPagarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContasPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
