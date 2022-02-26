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
import { User } from 'src/models/user.model';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private unsubscribe$ = new Subject<void>();
  private user?: User;
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {

    // this.authService
    //   .isLoggedIn()
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((response) => {
    //     this.authState = response;
    //   });
    //   this.unsubscribe$.next();
    //   this.unsubscribe$.complete();
    // if (this.authState) {
    //   if (this.authState.is_logged_in) {
    //     this.authService
    //     .getUser()
    //     .pipe(takeUntil(this.unsubscribe$))
    //     .subscribe((response) => {
    //       this.user = response;
    //     });
    //     this.router.navigate(['/home']);
    //     this.unsubscribe$.next();
    //     this.unsubscribe$.complete();
    //     if (this.user) {
    //       if (route.url[0]) {
    //         if (route.url[0].path === 'admin') {
    //         if (this.user.is_admin) {
    //           return true;
    //         } else {
    //           this.router.navigate(['/user/login']);
    //           return false;
    //         }
    //         }
    //         else {
    //           return true;
    //         }
    //       }
    //       else {
    //         return true;
    //       }
    //     }
    //     else {
    //       return true;
    //     }
    //   } else {
    //     this.router.navigate(['/user/login']);
    //     return false;
    //   }
    // }
    // this.router.navigate(['/user/login']);
    // return false;
    return true;
  }
}
