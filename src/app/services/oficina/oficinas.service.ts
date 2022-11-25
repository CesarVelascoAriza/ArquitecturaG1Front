import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oficinas } from 'src/app/models/oficinas';
import { OauthService } from '../usuarios/oauth.service';

@Injectable({
  providedIn: 'root'
})
export class OficinasService {

  private urlEndPoint: string = "/api/oficina"
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(
    private http: HttpClient,
    private oaut: OauthService
  ) {
    this.httpHeaders = this.httpHeaders.append("Authorization", 'Bearer ' + this.oaut.token)
  }

  listar(): Observable<Oficinas[]> {
    return this.http.get<Oficinas[]>(this.urlEndPoint);
  }
  ver(id: number): Observable<Oficinas> {
    return this.http.get<Oficinas>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }

  crear(oficinas: Oficinas): Observable<Oficinas> {
    return this.http.post<Oficinas>(this.urlEndPoint, oficinas, { headers: this.httpHeaders });
  }

  actualizar(oficinas: Oficinas): Observable<Oficinas> {
    return this.http.put<Oficinas>(`${this.urlEndPoint}/${oficinas.id}`, oficinas, { headers: this.httpHeaders });
  }

  eliminar(id: number): Observable<Oficinas> {
    return this.http.delete<Oficinas>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }
  listarPorPagina(page: string, size: string): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get<any>(`${this.urlEndPoint}/pagina`, { params: params ,headers:this.httpHeaders})
  }
}
