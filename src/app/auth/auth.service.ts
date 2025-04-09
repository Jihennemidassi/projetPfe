import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  signup(userSignup:any):  Observable<any>{
    return this.http.post('http://localhost:3000/user/signup-user',userSignup)as Observable<any>
  }
  login(userLogin:any):  Observable<any>{
    return this.http.post('http://localhost:3000/user/login-user',userLogin)as Observable<any>
  }
}
