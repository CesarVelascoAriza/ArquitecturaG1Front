import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPorEnviosComponent } from './usuario-por-envios.component';

describe('UsuarioPorEnviosComponent', () => {
  let component: UsuarioPorEnviosComponent;
  let fixture: ComponentFixture<UsuarioPorEnviosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPorEnviosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioPorEnviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
