import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmit():void{

  }
}
