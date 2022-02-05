import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/models/user/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn$ = new Observable<boolean>();
  constructor(private http: HttpClient) {
  }

  login(formData: any): Observable<any> {
    let response$: Observable<any> = this.http.post(
      environment.API_BASE_PATH + 'login',
      formData
    );
    this.isLoggedIn$.next(true);
    return response$;
  }
  register(formData: any): Observable<any> {
    let response$: Observable<any> = this.http.post(
      environment.API_BASE_PATH + 'register',
      formData,
    );
    console.log(formData);    
    return response$;
  }
  logout(): Observable<any> {
    let response$: Observable<any> = this.http.post(
      environment.API_BASE_PATH + 'logout',
      {}
    );
    return response$;
  }
  getUser(): Observable<User> {
    let response$: Observable<any> = this.http.get<User>(
      environment.API_BASE_PATH + 'user'
    );
    return response$;
  }
  isLoggedIn(): Observable<Boolean> {
    return this.isLoggedIn$;
  }
}