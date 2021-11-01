import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(formData: any): Observable<any> {
    let response$: Observable<any> = this.http.post(
      environment.API_BASE_PATH + 'login',
      formData,
      {
        withCredentials: true,
      }
    );
    return response$;
  }
  register(formData: any): Observable<any> {
    let response$: Observable<any> = this.http.post(
      environment.API_BASE_PATH + 'register',
      formData,
      {
        withCredentials: true,
      }
    );
    return response$;
  }
  logout(): Observable<any> {
    let response$: Observable<any> = this.http.post(
      environment.API_BASE_PATH + 'logout',
      {},
      { withCredentials: true }
    );
    return response$;
  }
  getUser(): Observable<User> {
    let response$: Observable<any> = this.http.get<User>(
      environment.API_BASE_PATH + 'user',
      {
        withCredentials: true,
      }
    );
    return response$;
  }
  isLogIn(): Observable<any> {
    let response$: Observable<any> = this.http.get(
      environment.API_BASE_PATH + 'islogin',
      { withCredentials: true }
    );
    return response$;
  }
}
