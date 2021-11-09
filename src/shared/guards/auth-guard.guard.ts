import { Injectable, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthState } from 'src/models/auth-state/auth-state.model';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private unsubscribe$ = new Subject<void>();
  private authState?: AuthState;
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.authService.isLoggedIn()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(response => {
      this.authState = response;
    });
    if (this.authState) {
      if (this.authState.is_logged_in) {
        console.log('AuthGuard: canActivate: true');
        return true;
      }
      else {
        this.router.navigate(['/user/login']);
        return false;
      }
    }
    
      // if (route.url[0].path === 'admin') {
        // if (this.authService.isLoggedIn) {
        //   return true;
        // }
      // }
    return false;
    }
}
