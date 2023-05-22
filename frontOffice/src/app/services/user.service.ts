import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.api;
  constructor(private http: HttpClient) { }
  
  login(data:any): Observable<any>{
    return this.http.post<any>(`${this.url}/user/login`, data,{
      headers: new HttpHeaders().set('Content-Type','application/json')
    });
  }

  checkToken(): Observable<boolean>{
    return this.http.get<boolean>(`${this.url}/checkToken`);
  }
}
