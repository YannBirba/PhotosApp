import { Injectable, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthState } from 'src/models/auth-state/auth-state.model';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, OnDestroy, OnInit {
  private readonly onDestroy = new Subject<void>();
  // private authState: AuthState;
  constructor(private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (1 == 1) {//this.authService.isLogIn = true
      if (route.url[0].path === 'admin') {
        // if (this.authService.isLoggedIn) {
        //   return true;
        // }
      }
      return true;
    }
    return false;
  }
  ngOnInit() {
    // this.authService.isLoggedIn() 
    //   .pipe(takeUntil(this.onDestroy))
    //   .subscribe(response => {
    //   this.authState = response;
    // });
  }
  ngOnDestroy() {
    this.onDestroy.next();
  }
}
