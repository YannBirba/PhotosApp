import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, finalize } from 'rxjs/operators';
import { AuthService } from 'src/shared/services/auth/auth.service';
import { UserService } from '../../../shared/services/user/user.service';
import {
  userDelete,
  userGetAll,
  userGetAllError,
  userGetAllResponse,
  userDeleteError,
  userDeleteResponse,
  userGet,
  userGetResponse,
  userGetError,
  userUpdate,
  userUpdateResponse,
  userUpdateError,
  userCreate,
  userCreateResponse,
  userCreateError,
} from './users.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService, private authService: AuthService) {}

  userGetAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userGetAll.type),
      mergeMap(({ clear }) =>
        this.userService.getAll(clear).pipe(
          map((users) => userGetAllResponse({ users })),
          catchError((error) => {
            console.error(error);
            return of(userGetAllError());
          }),
          finalize(() => {
            console.info('userGetAll$ effect complete');
          })
        )
      )
    )
  );

  userGet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userGet.type),
      mergeMap(({ userId }) =>
        this.userService.get(userId).pipe(
          map(() => userGetResponse({ userId })),
          catchError((error) => {
            console.error(error);
            return of(userGetError());
          }),
          finalize(() => {
            console.info('userGet$ effect complete');
          })
        )
      )
    )
  );

  userDelete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userDelete.type),
      mergeMap(({ userId }) =>
        this.userService.delete(userId).pipe(
          map(() => userDeleteResponse({ userId })),
          catchError((error) => {
            console.error(error);
            return of(userDeleteError());
          }),
          finalize(() => {
            console.info('userDelete$ effect complete');
          })
        )
      )
    )
  );

  userUpdate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userUpdate.type),
      mergeMap(({ user }) =>
        this.userService.update(user).pipe(
          map(() => userUpdateResponse({ user })),
          catchError((error) => {
            console.error(error);
            return of(userUpdateError());
          }),
          finalize(() => {
            console.info('userUpdate$ effect complete');
          })
        )
      )
    )
  );

  userCreate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userCreate.type),
      mergeMap(({ user }) =>
        this.authService.register(user).pipe(
          map(() => userCreateResponse({ user })),
          catchError((error) => {
            console.error(error);
            return of(userCreateError());
          }),
          finalize(() => {
            console.info('userCreate$ effect complete');
          })
        )
      )
    )
  );
}
