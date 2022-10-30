import { Component, OnInit } from '@angular/core';
import { tipoDocumento } from 'src/app/models/tipoDocumento';
import { AllServiceService } from 'src/app/service/all-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {


  listTipoDocmento: tipoDocumento[] = [];
  usuario: usuarios = new usuarios();
  
  formUsuario = this.formBuilder.group({
    tipo: ['', Validators.required],
    documento: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    dir: ['', Validators.required],
    email: ['', Validators.required],
    tel: ['', Validators.required],
    usuario: ['', Validators.required],
    contra: ['', Validators.required]
  });



  constructor(
    private service: AllServiceService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.LitarTipoDocumento()
  }

  LitarTipoDocumento() {
    this.service.getAllTipoDocumento().subscribe(data => {
      this.listTipoDocmento = data
    })
  }

  onSubmit(): void {
    let tipo : tipoDocumento = new tipoDocumento();
    tipo.id=Number(this.formUsuario.get('tipo')?.value)
    this.usuario.numeroDocumento = Number(this.formUsuario.get('documento')?.value);
    this.usuario.nombre = this.formUsuario.get('nombre')?.value
    this.usuario.apellido = this.formUsuario.get('apellido')?.value
    this.usuario.correo = this.formUsuario.get('email')?.value
    this.usuario.direccion = this.formUsuario.get('dir')?.value
    this.usuario.telefono = this.formUsuario.get('tel')?.value
    this.usuario.tipo = tipo;
    this.usuario.usuario = this.formUsuario.get('usuario')?.value
    this.usuario.contrasenia = this.formUsuario.get('contra')?.value
    this.service.saveUsuariRegistri(this.usuario).subscribe(data => {
      console.log(data)
      this.formUsuario.reset();
    }, err => {
      console.error(err)
    });

  }
  castUser() {

  }
}
