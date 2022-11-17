import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from 'src/app/models/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private urlEndPoint:string = "/api/estado";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  listar():Observable<Estado[]>{
    return this.http.get<Estado[]>(this.urlEndPoint);
  }
  ver(id:number):Observable<Estado>{
    return this.http.get<Estado>(`${this.urlEndPoint}/${id}`);
  }

  crear(estado:Estado):Observable<Estado>{
    return this.http.post<Estado>(this.urlEndPoint,estado,{headers:this.httpHeaders});
  }

  actualizar(estado:Estado):Observable<Estado>{
    return this.http.put<Estado>(`${this.urlEndPoint}/${estado.id}`,estado,{headers:this.httpHeaders});
  }

  eliminar(id:number):Observable<Estado>{
    return this.http.delete<Estado>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }

  listarPorPagina(page:string,size:string):Observable<any>{
    const params =new HttpParams()
    .set('page',page)
    .set('size',size);

    return this.http.get<any>(`${this.urlEndPoint}/pagina`,{params:params}) 
  }
}
