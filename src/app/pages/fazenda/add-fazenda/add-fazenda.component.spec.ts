import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFazendaComponent } from './add-fazenda.component';

describe('AddFazendaComponent', () => {
  let component: AddFazendaComponent;
  let fixture: ComponentFixture<AddFazendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFazendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFazendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
