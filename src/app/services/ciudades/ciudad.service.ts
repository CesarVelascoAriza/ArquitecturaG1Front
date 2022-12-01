import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from 'src/app/models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private urlEndPoint:string = "/api/ciudad";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(
    private http: HttpClient
  ) { }


  listar():Observable<Ciudad[]>{
    return this.http.get<Ciudad[]>(this.urlEndPoint);
  }
  ver(id:number):Observable<Ciudad>{
    return this.http.get<Ciudad>(`${this.urlEndPoint}/${id}`);
  }

  crear(ciudad:Ciudad):Observable<Ciudad>{
    return this.http.post<Ciudad>(this.urlEndPoint,ciudad,{headers:this.httpHeaders});
  }

  actualizar(ciudad:Ciudad):Observable<Ciudad>{
    return this.http.put<Ciudad>(this.urlEndPoint,ciudad,{headers:this.httpHeaders});
  }

  eliminar(id:number):Observable<Ciudad>{
    return this.http.delete<Ciudad>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }
}
