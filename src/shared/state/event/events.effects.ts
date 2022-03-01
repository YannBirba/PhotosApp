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
  eventGet,
  eventGetResponse,
  eventGetError,
  eventUpdate,
  eventUpdateResponse,
  eventUpdateError,
  eventCreate,
  eventCreateResponse,
  eventCreateError,
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

  eventGet$ = createEffect(() =>
  this.actions$.pipe(
    ofType(eventGet.type),
    mergeMap(({ eventId }) =>
      this.eventService.get(eventId).pipe(
        map(() => eventGetResponse({ eventId })),
        catchError((error) => {
          console.error(error);
          return of(eventGetError());
        }),
        finalize(() => {
          console.info('eventGet$ effect complete');
        })
      )
    )
  )
  );

  eventDelete$ = createEffect(() =>
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
            console.info('eventDelete$ effect complete');
          })
        )
      )
    )
  );
  
  eventUpdate$ = createEffect(() =>
  this.actions$.pipe(
    ofType(eventUpdate.type),
    mergeMap(({ event }) =>
      this.eventService.update(event).pipe(
        map(() => eventUpdateResponse({ event })),
        catchError((error) => {
          console.error(error);
          return of(eventUpdateError());
        }),
        finalize(() => {
          console.info('eventUpdate$ effect complete');
        })
      )
    )
  )
  );
  
  eventCreate$ = createEffect(() =>
  this.actions$.pipe(
    ofType(eventCreate.type),
    mergeMap(({ event }) =>
      this.eventService.update(event).pipe(
        map(() => eventCreateResponse({ event })),
        catchError((error) => {
          console.error(error);
          return of(eventCreateError());
        }),
        finalize(() => {
          console.info('eventCreate$ effect complete');
        })
      )
    )
  )
);
}
