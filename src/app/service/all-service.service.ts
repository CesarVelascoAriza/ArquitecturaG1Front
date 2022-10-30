import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from'@angular/common/http'
import { tipoDocumento } from '../models/tipoDocumento';
import { environment } from 'src/environments/environment';
import { usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
  };
  constructor(private http:HttpClient) { }



  getAllTipoDocumento():Observable<tipoDocumento[]>{
    return this.http.get<tipoDocumento[]>(environment.URL_TipoDocumento,this.httpOptions);
  }

  saveUsuariRegistri(user:usuarios):Observable<usuarios>{
    return this.http.post<usuarios>(environment.URL_Usuario,user,this.httpOptions);
  }

}
