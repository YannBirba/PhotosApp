import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(formData: any): Observable<any> {
    let response$: Observable<any> = this.http.post(
      environment.API_BASE_PATH + 'login',
      formData
    );
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
  isLoggedIn(): Observable<any> {
    let response$: Observable<any> = this.http.get(
      environment.API_BASE_PATH + 'isloggedin'
    );
    return response$;
  }
}