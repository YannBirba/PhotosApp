import { Injectable, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map, mergeMap, takeUntil, tap } from 'rxjs/operators';
import { User } from 'src/models/user.model';
import { AuthService } from '../services/auth/auth.service';
import { currentUser } from '../state/auth/auth.actions';
import { selectCurrentUser } from '../state/auth/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public currentUser$: Observable<User> | null = null;
  constructor(
    private router: Router,
    private store: Store<{ currentUser: User }>
  ) {}
  canActivate(): Observable<boolean>{
    this.currentUser$ = this.store.select(selectCurrentUser);
    return this.currentUser$.pipe(
      map((user) => {
        if (user.email) {
          return true;
        } else {
          this.router.navigate(['/user/login']);
          return false;
        }
      })
    );
  }
}
