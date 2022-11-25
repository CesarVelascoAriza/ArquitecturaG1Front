import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTarifasComponent } from './consultar-tarifas.component';

describe('ConsultarTarifasComponent', () => {
  let component: ConsultarTarifasComponent;
  let fixture: ComponentFixture<ConsultarTarifasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarTarifasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarTarifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
