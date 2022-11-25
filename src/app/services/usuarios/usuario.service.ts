import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from 'src/app/models/usuarios';
import { OauthService } from './oauth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint: string = "/api/usuario";
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    private oaut: OauthService
  ) {
    this.httpHeaders = this.httpHeaders.append("Authorization", 'Bearer ' + this.oaut.token)
  }

  listarPorPagina(page: string, size: string): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get<any>(`${this.urlEndPoint}/pagina`, { params: params ,headers:this.httpHeaders })
  }
  listar(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.urlEndPoint);
  }
  ver(id: number): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }

  crear(usuario: Usuarios): Observable<Usuarios> {
    this.httpHeaders = this.httpHeaders.delete('Authorization');
    return this.http.post<Usuarios>(this.urlEndPoint, usuario,{headers:this.httpHeaders});
  }

  actualizar(usuario: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(`${this.urlEndPoint}/${usuario.numeroDocumento}`, usuario, { headers: this.httpHeaders });
  }

  eliminar(id: number): Observable<Usuarios> {
    return this.http.delete<Usuarios>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }
}

