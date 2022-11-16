import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from 'src/app/models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private urlEndPoint:string="/api/vehiculo"
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(
    private http:HttpClient
  ) { }

  listarPorPagina(page:string,size:string):Observable<any>{
    const params =new HttpParams()
    .set('page',page)
    .set('size',size);

    return this.http.get<any>(`${this.urlEndPoint}/pagina`,{params:params}) 
  }

  listar():Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(this.urlEndPoint);
  }
  ver(id:number):Observable<Vehiculo>{
    return this.http.get<Vehiculo>(`${this.urlEndPoint}/${id}`);
  }

  crear(vehiculo:Vehiculo):Observable<Vehiculo>{
    return this.http.post<Vehiculo>(this.urlEndPoint,vehiculo,{headers:this.httpHeaders});
  }

  actualizar(vehiculo:Vehiculo):Observable<Vehiculo>{
    return this.http.put<Vehiculo>(`${this.urlEndPoint}/${vehiculo.id}`,vehiculo,{headers:this.httpHeaders});
  }

  eliminar(id:number):Observable<Vehiculo>{
    return this.http.delete<Vehiculo>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }

}
