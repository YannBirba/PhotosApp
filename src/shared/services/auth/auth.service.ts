import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login, Register } from 'src/models/auth.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(login: Login): Observable<any> {
    return this.http.post<Login>(environment.API_BASE_PATH + 'login', login);
  }

  register(formData: Register): Observable<any> {
    return this.http.post<Register>(
      environment.API_BASE_PATH + 'register',
      formData
    );
  }
  logout(): Observable<any> {
    return this.http.post(environment.API_BASE_PATH + 'logout', {});
  }
  getCurrentUser(): Observable<User> {
    return this.http
      .get<{ data: User }>(environment.API_BASE_PATH + 'user')
      .pipe(map((currentUser) => currentUser.data));
  }

  updateCurrentUser(user: User): Observable<any> {
    return this.http.put<User>(
      environment.API_BASE_PATH + 'user/updatecurrent',
      user
    );
  }
}
