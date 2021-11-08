import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/models/user/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthState } from 'src/models/auth-state/auth-state.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new Subject<boolean>();
  constructor(private http: HttpClient) {
  }

  login(formData: any): Observable<any> {
    let response$: Observable<any> = this.http.post(
      environment.API_BASE_PATH + 'login',
      formData
    );
    this._isLoggedIn$.next(true);
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
  isLoggedIn(): Observable<AuthState> {
    let response$: Observable<any> = this.http.get(
      environment.API_BASE_PATH + 'isloggedin'
    );
    return response$;
  }
}