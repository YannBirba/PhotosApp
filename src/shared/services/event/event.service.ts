import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Event } from 'src/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Event[]> {
      return this.http.get<{ data: Event[] }>(
        environment.API_BASE_PATH + 'event'
      )
      .pipe(map((events) => events.data || []));
  }
  get(id: number): Observable<Event> {
    console.info('get event with id: ' + id);
    return this.http.get<{ data: Event }>(
      environment.API_BASE_PATH + 'event/' + id
    )
      .pipe(map((event) => event.data));
  }
  create(event: Event) :Observable<any> {
    return this.http.post<Event>(
      environment.API_BASE_PATH + 'event',
      event
    );
  }
  update(event: Event): Observable<any> {
    return this.http.put<Event>(
      environment.API_BASE_PATH + 'event/' + event.id,
      event
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Event>(
      environment.API_BASE_PATH + 'event/' + id
    );
  }
}