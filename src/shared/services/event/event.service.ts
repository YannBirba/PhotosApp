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
  get(id: number) :Observable<Event> {
    let response$: Observable<Event> = this.http.get<Event>(
      environment.API_BASE_PATH + 'event/' + id
    );
    return response$;
  }
  create(event: Event) :Observable<any> {
    let response$: Observable<any> = this.http.post<Event>(
      environment.API_BASE_PATH + 'event',
      event
    );
    return response$;
  }
  update(event: Event): Observable<any> {
    let response$: Observable<any> = this.http.put<Event>(
      environment.API_BASE_PATH + 'event/' + event.id,
      event
    );
    return response$;
  }

  delete(id: number): Observable<any> {
    let response$: Observable<any> = this.http.delete<Event>(
      environment.API_BASE_PATH + 'event/' + id
    );
    return response$;
  }
}