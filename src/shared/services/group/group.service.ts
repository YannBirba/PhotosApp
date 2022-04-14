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
export class GroupService {

  constructor(private http: HttpClient) { }

  getAll(clear: boolean = false): Observable<Group[]> {
    if (clear) {
      const emptyGroups$ = new Observable<Group[]>((observer) => {
        observer.next([]);
        observer.complete();
      });
      return emptyGroups$;
    }
    return this.http
      .get<{ data: Group[] }>(environment.API_BASE_PATH + 'group')
      .pipe(map((groups) => groups.data || []));
  }

  get(id: number): Observable<Group> {
    return this.http
      .get<{ data: Group }>(environment.API_BASE_PATH + 'group/' + id)
      .pipe(map((group) => group.data));
  }

  create(group: Group): Observable<any> {
    return this.http.post<Group>(environment.API_BASE_PATH + 'group', group);
  }

  update(group: Group): Observable<any> {
    return this.http.put<Group>(
      environment.API_BASE_PATH + 'group/' + group.id,
      group
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Group>(environment.API_BASE_PATH + 'group/' + id);
  }

  getUsers(id: number): Observable<any> {
    return this.http
      .get<{ data: User[] }>(environment.API_BASE_PATH + 'group/' + id + '/users')
      .pipe(map((users) => users.data || []));
  }

  attachEvent(groupId: number, eventId: number): Observable<any> {
    return this.http.post<Group>(
      environment.API_BASE_PATH + 'group/' + groupId + '/event',
      eventId
    );
  }
}
