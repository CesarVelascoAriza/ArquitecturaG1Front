import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { OauthService } from 'src/app/services/usuarios/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  err: any;

  user: Usuarios;

  formLogin = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(45)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(60)]],
    grant_type: ['password']
  });

  get usuario() { return this.formLogin.get('username')!; }
  get password() { return this.formLogin.get('password')!; }
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private outhService: OauthService
  ) {
    this.user = new Usuarios();
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }

  onSubmit(): void {
    this.outhService.login(this.formLogin.value).subscribe({
      next: (v) => {
        console.log(v);
        this.outhService.guardarUsuario(v.access_token);
        this.outhService.guardarToken(v.access_token);
        let usuario = this.outhService.usuario;
        console.log(usuario);
        console.log();
        if (usuario.authorities[0] === "ROLE_EMPLEADO") {
          this.router.navigate(['/empleado']);
        } else if (usuario.authorities[0] === "ROLE_ADMIN") {
          this.router.navigate(['/admin']);

        } else {
          this.router.navigate(['/home']);
        }
        Swal.fire('login', `Hola ${usuario.nombre} Se atentico con exito !`, 'info')
      },
      error: (e) => {
        console.log(e);
        if (e.status === 400) {
          Swal.fire('Error login', 'Usuario o clave incorrectos', 'error')
        }
      },
      complete: () => this.reload()
    })
  }
  private reload() {
    setTimeout(() => {
      location.reload()
    }, 1000);
  }
}
