import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Group } from 'src/models/group.model';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(clear: boolean = false): Observable<User[]> {
    if (clear) {
      const emptyUsers$ = new Observable<User[]>((observer) => {
        observer.next([]);
        observer.complete();
      });
      return emptyUsers$;
    }
    return this.http
      .get<{ data: User[] }>(environment.API_BASE_PATH + 'userlist')
      .pipe(map((users) => users.data || []));
  }

  get(id: number): Observable<User> {
    return this.http
      .get<{ data: User }>(environment.API_BASE_PATH + 'user/' + id)
      .pipe(map((user) => user.data));
  }

  update(user: User): Observable<any> {
    return this.http.put<User>(
      environment.API_BASE_PATH + 'user/' + user.id,
      user
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<User>(environment.API_BASE_PATH + 'user/' + id);
  }

}
