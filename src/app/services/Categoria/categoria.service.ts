import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { OauthService } from '../usuarios/oauth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlEndPoint:string="/api/categoria"
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

    return this.http.get<any>(`${this.urlEndPoint}/pagina`,{params:params, headers:this.httpHeaders}) 
  }

  listar():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlEndPoint,{headers:this.httpHeaders});
  }
  ver(id:number):Observable<Categoria>{
    return this.http.get<Categoria>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }

  crear(categoria:Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(this.urlEndPoint,categoria,{headers:this.httpHeaders});
  }

  actualizar(categoria:Categoria):Observable<Categoria>{
    return this.http.put<Categoria>(`${this.urlEndPoint}/${categoria.id}`,categoria,{headers:this.httpHeaders});
  }

  eliminar(id:number):Observable<Categoria>{
    return this.http.delete<Categoria>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }

}
