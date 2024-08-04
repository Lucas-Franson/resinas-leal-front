import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContasReceberComponent } from './add-contas-receber.component';

describe('AddContasReceberComponent', () => {
  let component: AddContasReceberComponent;
  let fixture: ComponentFixture<AddContasReceberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddContasReceberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContasReceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
