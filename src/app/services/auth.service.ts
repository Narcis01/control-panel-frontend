import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Role } from '../common/role';
import { RegisterRequest } from '../common/register-request';
import { TokenService } from './token.service';
import { User } from '../common/user';
import { Token } from '../common/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) { }
  
  loginURL: string = "http://localhost:8080/api/v1/auth/authenticate";
  registerURL: string ="http://localhost:8080/api/v1/auth/register";
  login(email: string, password: string): Observable<Token> {
    return this.http.post<Token>(this.loginURL, {email, password});
  }

  registerUser(registerRequest: RegisterRequest): Observable<any>{
    return this.http.post<any>(this.registerURL, registerRequest);
  }

  
}
