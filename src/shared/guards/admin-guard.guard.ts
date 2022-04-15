import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from 'src/models/user.model';
import { currentUser } from '../state/auth/auth.actions';
import { selectCurrentUser } from '../state/auth/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  public currentUser$: Observable<User> | null = null;
  constructor(
    private router: Router,
    private store: Store<{ currentUser: User }>
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.currentUser$ = this.store.select(selectCurrentUser);
    return this.currentUser$.pipe(
      map((user) => {
        if (user.email) {
          if (user.is_admin) {
            return true;
          } else {
            this.router.navigate(['/']);
            return false;
          }
        } else {
          this.router.navigate(['/user/login']);
          return false;
        }
      })
    );
  }
}
