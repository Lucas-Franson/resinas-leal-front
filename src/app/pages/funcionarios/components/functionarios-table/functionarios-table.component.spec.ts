import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionariosTableComponent } from './functionarios-table.component';

describe('FunctionariosTableComponent', () => {
  let component: FunctionariosTableComponent;
  let fixture: ComponentFixture<FunctionariosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionariosTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionariosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
