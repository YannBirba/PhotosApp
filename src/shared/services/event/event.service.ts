import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Event } from 'src/models/event.model';
import { Group } from 'src/models/group.model';
import { Image } from 'src/models/image.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getAll(clear: boolean = false): Observable<Event[]> {
    if (clear) {
      const emptyEvents$ = new Observable<Event[]>((observer) => {
        observer.next([]);
        observer.complete();
      });
      return emptyEvents$;
    }
    return this.http
      .get<{ data: Event[] }>(environment.API_BASE_PATH + 'event')
      .pipe(map((events) => events.data || []));
  }

  get(id: number): Observable<Event> {
    return this.http
      .get<{ data: Event }>(environment.API_BASE_PATH + 'event/' + id)
      .pipe(map((event) => event.data));
  }

  create(event: Event): Observable<any> {
    return this.http.post<Event>(environment.API_BASE_PATH + 'event', event);
  }

  update(event: Event): Observable<any> {
    return this.http.put<Event>(
      environment.API_BASE_PATH + 'event/' + event.id,
      event
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Event>(environment.API_BASE_PATH + 'event/' + id);
  }

  userGroupGetAll(clear: boolean = false): Observable<Event[]> {
    if (clear) {
      const emptyEvents$ = new Observable<Event[]>((observer) => {
        observer.next([]);
        observer.complete();
      });
      return emptyEvents$;
    }
    return this.http
      .get<{ data: Event[] }>(environment.API_BASE_PATH + 'event/usergroupindex')
      .pipe(map((events) => events.data || []));
  }

  getAllGroups(id: number): Observable<Group[]> {
    return this.http
      .get<{ data: Group[] }>(environment.API_BASE_PATH + id +'groups')
      .pipe(map((groups) => groups.data || []));
  }

  attachGroup(eventId: number, groupId: number): Observable<any> {
    return this.http.post<Event>(
      environment.API_BASE_PATH + 'event/' + eventId + '/group',
      groupId
    );
  }
  getAllImages(id: number): Observable<Image[]> {
    return this.http
      .get<{ data: any }>(environment.API_BASE_PATH + 'events/' + id + '/images')
      .pipe(map((images) => images.data || []));
  }
  getImage(id: number): Observable<Image> {
    return this.http
      .get<{ data: Image }>(environment.API_BASE_PATH + 'events/' + id + '/image')
      .pipe(map((image) => image.data));
  }
}
