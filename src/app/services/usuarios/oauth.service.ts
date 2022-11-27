import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Usuarios } from 'src/app/models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  private urlEndPoint: string = "/api/security/oauth/token";
  jwt: JwtHelperService = new JwtHelperService();
  private _usuario?: Usuarios;
  private _token?: string;


  private httpHeaders = new HttpHeaders(
    {
      'Authorization': 'Basic QW5ndWxhckFwcDoxMjM0NTY3ODkw',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  );
  constructor(
    private http: HttpClient
  ) { /* TODO document why this constructor is empty */ }


  login(usuario: any): Observable<any> {
    const body = new HttpParams({ fromObject: usuario });
    return this.http.post<any>(this.urlEndPoint, body.toString(), { headers: this.httpHeaders });
  }


  logout(): void {
    this._token = null! ;
    this._usuario = null!;
    sessionStorage.removeItem("token");
    sessionStorage.removeItem('usuario');
    sessionStorage.clear();
  }

  public get usuario(): Usuarios {
    if (this._usuario != null) {
      return this._usuario;
    } else {
      if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
        this._usuario = JSON.parse(sessionStorage.getItem('usuario')!) as Usuarios;
        return this._usuario;
      }
    }
    return new Usuarios;
  }
  public get token(): string {
    if (this._token != null) {
      return this._token
    } else {
      if (this._token == null && sessionStorage.getItem('token') != '') {
        this._token = sessionStorage.getItem('token')!;
        return this._token;
      }
    }
    return null!;
  }
  guardarUsuario(accesToken: string): void {
    let payload = this.obtenerDatosToken(accesToken);
    this._usuario = new Usuarios;
    this._usuario.username = payload.user_name;
    this._usuario.apellido = payload.apellido;
    this._usuario.correo = payload.correo;
    this._usuario.nombre = payload.nombre;
    this._usuario.authorities = payload.authorities;
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario))
  }

  guardarToken(accesToken: string): void {
    this._token = accesToken;
    sessionStorage.setItem('token', accesToken);
  }
  obtenerDatosToken(accesToken: string): any {
    if (accesToken != null) {
      console.log(accesToken);
      return this.jwt.decodeToken(accesToken);
    }
    return null;
  }

  hasRoles(role: string):boolean{
    if(this.usuario.authorities.includes(role)){
      return true;
    }
    return false;
  }
}
 