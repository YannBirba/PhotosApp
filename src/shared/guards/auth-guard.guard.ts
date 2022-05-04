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
    private store: Store<{ currentUser: User }>,
    private authService: AuthService
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
        if (user.id) {
          return true;
        } else {
          // this.router.navigate(['/']);
          return false;
        }
      })
    );
  }
}
