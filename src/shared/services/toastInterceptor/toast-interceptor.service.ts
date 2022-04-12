import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToastInterceptorService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          if (response.body && response.body.message) {
            console.log(response.body.message);
          }
        }
      }),
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error && error.error.message) {
            console.error(error.error.message);
          }
        }
        return of(error);
      })
    );
  }
}
