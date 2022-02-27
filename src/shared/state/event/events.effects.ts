import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, finalize } from 'rxjs/operators';
import { EventService } from '../../services/event/event.service';
import {
  eventDelete,
  eventGetAll,
  eventGetAllError,
  eventGetAllResponse,
  eventDeleteError,
  eventDeleteResponse,
} from './events.actions';

@Injectable()
export class EventEffects {
  constructor(private actions$: Actions, private eventService: EventService) {}

  eventGetAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(eventGetAll.type),
      mergeMap(() =>
        this.eventService.getAll().pipe(
          map((events) => eventGetAllResponse({ events })),
          catchError((error) => {
            console.error(error);
            return of(eventGetAllError());
          }),
          finalize(() => {
            console.info('eventGetAll$ effect complete');
          })
        )
      )
    )
  );

  deleteEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(eventDelete.type),
      mergeMap(({ eventId }) =>
        this.eventService.delete(eventId).pipe(
          map(() => eventDeleteResponse({ eventId })),
          catchError((error) => {
            console.error(error);
            return of(eventDeleteError());
          }),
          finalize(() => {
            console.info('deleteEvent$ effect complete');
          })
        )
      )
    )
  );
}
