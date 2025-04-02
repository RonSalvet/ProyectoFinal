import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosDetallesComponent } from './servicios-detalles.component';

describe('ServiciosDetallesComponent', () => {
  let component: ServiciosDetallesComponent;
  let fixture: ComponentFixture<ServiciosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
