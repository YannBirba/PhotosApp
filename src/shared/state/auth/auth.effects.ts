import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, finalize } from 'rxjs/operators';
import { AuthService } from 'src/shared/services/auth/auth.service';
import {
  currentUser,
  currentUserError,
  currentUserResponse,
  currentUserUpdate,
  currentUserUpdateError,
  currentUserUpdateResponse,
  login,
  loginError,
  loginResponse,
  logout,
  logoutError,
  logoutResponse,
  register,
  registerError,
  registerResponse,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login.type),
      mergeMap(({ login }) =>
        this.authService.login(login).pipe(
          map((response) => {
            this.router.navigate(['/user']);
            return loginResponse({ login });
          }),
          catchError((error) => {
            console.error(error);
            return of(loginError());
          }),
          finalize(() => {
            console.info('login$ effect complete');
          })
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register.type),
      mergeMap(({ register }) =>
        this.authService.register(register).pipe(
          map((response) => {
            this.router.navigate(['/user/login']);
            return registerResponse({ register });
          }),
          catchError((error) => {
            console.error(error);
            return of(registerError());
          }),
          finalize(() => {
            console.info('register$ effect complete');
          })
        )
      )
    )
  );

  logout$ = createEffect(() =>
  this.actions$.pipe(
    ofType(logout.type),
    mergeMap(() =>
      this.authService.logout().pipe(
        map(() => {
          this.router.navigate(['/user/login']);
          return logoutResponse();
        }),
        catchError((error) => {
          console.error(error);
          return of(logoutError());
        }),
        finalize(() => {
          console.info('logout$ effect complete');
        })
      )
    )
  )
);

  currentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(currentUser.type),
      mergeMap(() =>
        this.authService.getCurrentUser().pipe(
          map((currentUser) => currentUserResponse({ currentUser })),
          catchError((error) => {
            console.error(error);
            return of(currentUserError());
          }),
          finalize(() => {
            console.info('currentUser$ effect complete');
          })
        )
      )
    )
  );

  currentUserUpdate$ = createEffect(() =>
  this.actions$.pipe(
    ofType(currentUserUpdate.type),
    mergeMap(({ currentUser }) =>
      this.authService.updateCurrentUser(currentUser).pipe(
        map(() => currentUserUpdateResponse({ currentUser })),
        catchError((error) => {
          console.error(error);
          return of(currentUserUpdateError());
        }),
        finalize(() => {
          console.info('currentUserUpdate$ effect complete');
        })
      )
    )
  )
);
}
