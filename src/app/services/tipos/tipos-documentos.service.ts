import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDocumento } from 'src/app/models/tipo-documento';

@Injectable({
  providedIn: 'root'
})
export class TiposDocumentosService {


  private urlEndPoint:string = "/api/tipoDocumento";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  
  constructor(
    private http: HttpClient
  ) { /* TODO document why this constructor is empty */  }
  listar():Observable<TipoDocumento[]>{
    return this.http.get<TipoDocumento[]>(this.urlEndPoint);
  }
  ver(id:number):Observable<TipoDocumento>{
    return this.http.get<TipoDocumento>(`${this.urlEndPoint}/${id}`);
  }

  crear(tipoDoc:TipoDocumento):Observable<TipoDocumento>{
    return this.http.post<TipoDocumento>(this.urlEndPoint,tipoDoc,{headers:this.httpHeaders});
  }

  actualizar(tipoDoc:TipoDocumento):Observable<TipoDocumento>{
    return this.http.put<TipoDocumento>(this.urlEndPoint,tipoDoc,{headers:this.httpHeaders});
  }

  eliminar(id:number):Observable<TipoDocumento>{
    return this.http.delete<TipoDocumento>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }
}
