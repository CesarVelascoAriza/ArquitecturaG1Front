import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasFormComponent } from './oficinas-form.component';

describe('OficinasFormComponent', () => {
  let component: OficinasFormComponent;
  let fixture: ComponentFixture<OficinasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OficinasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
