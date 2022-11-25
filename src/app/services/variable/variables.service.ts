import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Variable } from 'src/app/models/variable';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  private urlEndPoint:string="/api/tipo_producto"
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

  listar():Observable<Variable[]>{
    return this.http.get<Variable[]>(this.urlEndPoint);
  }
  ver(id:number):Observable<Variable>{
    return this.http.get<Variable>(`${this.urlEndPoint}/${id}`);
  }

  crear(variable:Variable):Observable<Variable>{
    return this.http.post<Variable>(this.urlEndPoint,variable,{headers:this.httpHeaders});
  }

  actualizar(variable:Variable):Observable<Variable>{
    return this.http.put<Variable>(`${this.urlEndPoint}/${variable.id}`,variable,{headers:this.httpHeaders});
  }

  eliminar(id:number):Observable<Variable>{
    return this.http.delete<Variable>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }
}
