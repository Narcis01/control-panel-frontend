import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Role } from '../common/role';
import { User } from '../common/user';
import { BehaviorSubject, Observable, last } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient,
    private tokenService: TokenService) { }

  private name = new BehaviorSubject<string>('Log in first');
  username = this.name.asObservable();

  private role = new BehaviorSubject<string>('');
  userRole = this.role.asObservable();

  private signIn = new BehaviorSubject<boolean>(false);
  sign = this.signIn.asObservable();

  usersUrl: string = "http://localhost:8080/api/v1/user/users";
  managersUrl: string = "http://localhost:8080/api/v1/manager/managers";
  adminsUrl: string = "http://localhost:8080/api/v1/admin/admins";
  deleteUrl: string = "http://localhost:8080/api/v1/admin/delete";
  createUrl: string = "http://localhost:8080/api/v1/admin/create";
  logoutUrl: string = "http://localhost:8080/api/v1/auth/logout"
  getUserUrl: string = "http://localhost:8080/api/v1/manager/user";
  saveUserUrl: string = "http://localhost:8080/api/v1/manager/update"
  setUser(value: string){
    this.name.next(value);
  }
  
  setRole(value: string){
    this.role.next(value);
  }

  setSignIn(value: boolean){
    this.signIn.next(value);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getManagers(): Observable<User[]> {
    
    return this.http.get<User[]>(this.managersUrl);
  }

  getAdmins(): Observable<User[]>{
    return this.http.get<User[]>(this.adminsUrl);
  }

  delete(id: number): Observable<any>{
    return this.http.delete<User>(`${this.deleteUrl}/${id}`);
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(this.createUrl, user)
  }

  logout(): Observable<any>{
    return this.http.get<any>(this.logoutUrl)
  }

  getUserByName(firstName: string, lastName: string): Observable<User>{
    return this.http.get<User>(`${this.getUserUrl}?firstName=${firstName}&lastName=${lastName}`);
  }

  saveUser(user: User): Observable<any>{
    return this.http.post<any>(`${this.saveUserUrl}`, user);
  }
  
}
