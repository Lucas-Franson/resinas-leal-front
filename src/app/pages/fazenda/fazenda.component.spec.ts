import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendaComponent } from './fazenda.component';

describe('FazendaComponent', () => {
  let component: FazendaComponent;
  let fixture: ComponentFixture<FazendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FazendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FazendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
