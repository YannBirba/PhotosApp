import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Image } from 'src/models/image.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  getAll(clear: boolean = false): Observable<Image[]> {
    if (clear) {
      const emptyGroups$ = new Observable<Image[]>((observer) => {
        observer.next([]);
        observer.complete();
      });
      return emptyGroups$;
    }
    return this.http
      .get<{ data: Image[] }>(environment.API_BASE_PATH + 'image')
      .pipe(map((images) => images.data || []));
  }

  get(id: number): Observable<Image> {
    return this.http
      .get<{ data: Image }>(environment.API_BASE_PATH + 'image/' + id)
      .pipe(map((image) => image.data));
  }

  create(image: Image): Observable<any> {
    return this.http.post<Image>(environment.API_BASE_PATH + 'image', image);
  }

  update(image: Image): Observable<any> {
    return this.http.put<Image>(
      environment.API_BASE_PATH + 'image/' + image.id,
      image
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Image>(environment.API_BASE_PATH + 'image/' + id);
  }
}
