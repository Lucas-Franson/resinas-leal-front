import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerButtonComponent } from './drawer-button.component';

describe('DrawerButtonComponent', () => {
  let component: DrawerButtonComponent;
  let fixture: ComponentFixture<DrawerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
