import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, finalize } from 'rxjs/operators';
import { GroupService } from '../../services/group/group.service';
import {
  groupDelete,
  groupGetAll,
  groupGetAllError,
  groupGetAllResponse,
  groupDeleteError,
  groupDeleteResponse,
  groupGet,
  groupGetResponse,
  groupGetError,
  groupUpdate,
  groupUpdateResponse,
  groupUpdateError,
  groupCreate,
  groupCreateResponse,
  groupCreateError,
} from './groups.actions';

@Injectable()
export class GroupEffects {
  constructor(private actions$: Actions, private groupService: GroupService) {}

  groupGetAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupGetAll.type),
      mergeMap(({ clear }) =>
        this.groupService.getAll(clear).pipe(
          map((groups) => groupGetAllResponse({ groups })),
          catchError((error) => {
            console.error(error);
            return of(groupGetAllError());
          }),
          finalize(() => {
            console.info('groupGetAll$ effect complete');
          })
        )
      )
    )
  );

  groupGet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupGet.type),
      mergeMap(({ groupId }) =>
        this.groupService.get(groupId).pipe(
          map(() => groupGetResponse({ groupId })),
          catchError((error) => {
            console.error(error);
            return of(groupGetError());
          }),
          finalize(() => {
            console.info('groupGet$ effect complete');
          })
        )
      )
    )
  );

  groupDelete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupDelete.type),
      mergeMap(({ groupId }) =>
        this.groupService.delete(groupId).pipe(
          map(() => groupDeleteResponse({ groupId })),
          catchError((error) => {
            console.error(error);
            return of(groupDeleteError());
          }),
          finalize(() => {
            console.info('groupDelete$ effect complete');
          })
        )
      )
    )
  );

  groupUpdate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupUpdate.type),
      mergeMap(({ group }) =>
        this.groupService.update(group).pipe(
          map(() => groupUpdateResponse({ group })),
          catchError((error) => {
            console.error(error);
            return of(groupUpdateError());
          }),
          finalize(() => {
            console.info('groupUpdate$ effect complete');
          })
        )
      )
    )
  );

  groupCreate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupCreate.type),
      mergeMap(({ group }) =>
        this.groupService.create(group).pipe(
          map(() => groupCreateResponse({ group })),
          catchError((error) => {
            console.error(error);
            return of(groupCreateError());
          }),
          finalize(() => {
            console.info('groupCreate$ effect complete');
          })
        )
      )
    )
  );
}
