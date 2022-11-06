import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from 'src/app/models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  private urlEndPoint:string="/api/security/oauth/token";
  private httpHeaders = new HttpHeaders(
    {
      'Authorization':'Basic QW5ndWxhckFwcDoxMjM0NTY3ODkw',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    );
  constructor(
    private http:HttpClient
  ) { /* TODO document why this constructor is empty */  }

  
  login(usuario:any):Observable<Usuarios>{
    const body = new HttpParams({fromObject:usuario});
    return this.http.post<Usuarios>(this.urlEndPoint,body.toString(),{headers:this.httpHeaders});
  }

  
}
