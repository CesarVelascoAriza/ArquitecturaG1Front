import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosultarEnvioComponent } from './cosultar-envio.component';

describe('CosultarEnvioComponent', () => {
  let component: CosultarEnvioComponent;
  let fixture: ComponentFixture<CosultarEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosultarEnvioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosultarEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
