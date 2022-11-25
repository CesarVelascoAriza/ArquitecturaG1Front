import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Envios } from 'src/app/models/envios';
import { OauthService } from '../usuarios/oauth.service';

@Injectable({
  providedIn: 'root'
})
export class EnvioService {

  private urlEndPoint: string = "/api/envio"
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private token: string = ''
  constructor(
    private http: HttpClient,
    private oaut: OauthService
  ) { 
    
    this.httpHeaders = this.httpHeaders.append("Authorization", 'Bearer ' + this.oaut.token)
  }

  listarPorPagina(page:string,size:string):Observable<any>{
    const params =new HttpParams()
    .set('page',page)
    .set('size',size);

    return this.http.get<any>(`${this.urlEndPoint}/pagina`,{params:params}) 
  }

  listar(): Observable<Envios[]> {
    return this.http.get<Envios[]>(this.urlEndPoint);
  }

  ver(id: number): Observable<Envios> {
    return this.http.get<Envios>(`${this.urlEndPoint}/${id}`);
  }

  crear(envio: Envios): Observable<Envios> {
    return this.http.post<Envios>(this.urlEndPoint + '/crear-envio-usuario', envio, { headers: this.httpHeaders });
  }

  actualizar(envio: Envios): Observable<Envios> {
    return this.http.put<Envios>(`${this.urlEndPoint}/${envio.id}`, envio, { headers: this.httpHeaders });
  }

  eliminar(id: number): Observable<Envios> {
    return this.http.delete<Envios>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }

  listarEnviosPorAsiganar(id: number[]): Observable<Envios[]> {
    const body = new FormData();
    body.append('id', id.toString());
    this.httpHeaders = new HttpHeaders({ 'mimeType': 'multipart/form-data' });
    this.httpHeaders = this.httpHeaders.append("Authorization", 'Bearer ' + this.oaut.token)
    return this.http.post<Envios[]>(`${this.urlEndPoint}/listado-estado-admincion-2`, body, { headers: this.httpHeaders });
  }

  buscarPorUsurioYfecha(id:number, fechaInicial:string, fechaFinal:string):Observable<Envios[]>{
    const body = new FormData();
    body.append('id', id.toString());
    body.append('fechaInicial', fechaInicial);
    body.append('fechaFinal', fechaFinal);
    this.httpHeaders = new HttpHeaders({ 'mimeType': 'multipart/form-data' });
    this.httpHeaders = this.httpHeaders.append("Authorization", 'Bearer ' + this.oaut.token)
    return this.http.post<Envios[]>(`${this.urlEndPoint}/listado-por-usuario-fecha`,body,{ headers: this.httpHeaders })
  }
}
