import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarifas } from 'src/app/models/tarifas';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  private urlEndPoint:string="/api/tarifa"
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

  listar():Observable<Tarifas[]>{
    return this.http.get<Tarifas[]>(this.urlEndPoint);
  }
  ver(id:number):Observable<Tarifas>{
    return this.http.get<Tarifas>(`${this.urlEndPoint}/${id}`);
  }

  crear(tarifa:Tarifas):Observable<Tarifas>{
    return this.http.post<Tarifas>(this.urlEndPoint,tarifa,{headers:this.httpHeaders});
  }

  actualizar(tarifa:Tarifas):Observable<Tarifas>{
    return this.http.put<Tarifas>(`${this.urlEndPoint}/${tarifa.id}`,tarifa,{headers:this.httpHeaders});
  }

  eliminar(id:number):Observable<Tarifas>{
    return this.http.delete<Tarifas>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }
}
