import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstoqueComponent } from './add-estoque.component';

describe('AddEstoqueComponent', () => {
  let component: AddEstoqueComponent;
  let fixture: ComponentFixture<AddEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEstoqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
