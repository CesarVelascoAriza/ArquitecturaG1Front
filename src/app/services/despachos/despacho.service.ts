import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Despacho } from 'src/app/models/despacho';
import { OauthService } from '../usuarios/oauth.service';

@Injectable({
  providedIn: 'root'
})
export class DespachoService {

  private urlEndPoint:string="/api/despachos"
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(
    private http:HttpClient,
    private oaut: OauthService
  ) {
    this.httpHeaders = this.httpHeaders.append("Authorization", 'Bearer ' + this.oaut.token)
   }

  listarPorPagina(page:string,size:string):Observable<any>{
    const params =new HttpParams()
    .set('page',page)
    .set('size',size);

    return this.http.get<any>(`${this.urlEndPoint}/pagina`,{params:params,headers:this.httpHeaders}) 
  }

  listar():Observable<Despacho[]>{
    return this.http.get<Despacho[]>(this.urlEndPoint);
  }
  ver(id:number):Observable<Despacho>{
    return this.http.get<Despacho>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }

  crear(despacho:Despacho):Observable<Despacho>{
    return this.http.post<Despacho>(this.urlEndPoint,despacho,{headers:this.httpHeaders});
  }

  actualizar(despacho:Despacho):Observable<Despacho>{
    return this.http.put<Despacho>(`${this.urlEndPoint}/${despacho.id}`,despacho,{headers:this.httpHeaders});
  }

  eliminar(id:number):Observable<Despacho>{
    return this.http.delete<Despacho>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }
}
