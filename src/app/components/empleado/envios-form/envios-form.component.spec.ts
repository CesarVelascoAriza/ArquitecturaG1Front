import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviosFormComponent } from './envios-form.component';

describe('EnviosFormComponent', () => {
  let component: EnviosFormComponent;
  let fixture: ComponentFixture<EnviosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
