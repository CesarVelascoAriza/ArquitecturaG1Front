import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Envios } from 'src/app/models/envios';

@Injectable({
  providedIn: 'root'
})
export class EnvioService {

  private urlEndPoint:string="/api/envio"
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(
    private http:HttpClient
  ) { }

  listar():Observable<Envios[]>{
    return this.http.get<Envios[]>(this.urlEndPoint);
  }
  ver(id:number):Observable<Envios>{
    return this.http.get<Envios>(`${this.urlEndPoint}/${id}`);
  }

  crear(envio:Envios):Observable<Envios>{
    return this.http.post<Envios>(this.urlEndPoint+'/crear-envio-usuario',envio,{headers:this.httpHeaders});
  }

  actualizar(envio:Envios):Observable<Envios>{
    return this.http.put<Envios>(`${this.urlEndPoint}/${envio.id}`,envio,{headers:this.httpHeaders});
  }

  eliminar(id:number):Observable<Envios>{
    return this.http.delete<Envios>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }

  listarEnviosPorAsiganar(id:number):Observable<Envios[]>{
    return this.http.get<Envios[]>(`${this.urlEndPoint}/listado-estado-admincion?id=${id}`);
  }

}
