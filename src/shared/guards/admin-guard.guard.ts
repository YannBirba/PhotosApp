import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/models/user.model';
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
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.currentUser$ = this.store.select(selectCurrentUser);
    return this.currentUser$.pipe(
      map((user) => {
        if (user.is_admin) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      })
    );
  }
}
