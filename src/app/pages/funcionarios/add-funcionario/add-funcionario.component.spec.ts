import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuncionarioComponent } from './add-funcionario.component';

describe('AddFuncionarioComponent', () => {
  let component: AddFuncionarioComponent;
  let fixture: ComponentFixture<AddFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFuncionarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
