import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  // private userState : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.token.isLoggedIn());
  // userAuthState = this.userState.asObservable();

  // constructor(public authService: AuthService) {}

  // setAuthState(value: boolean) : void {
  //   this.userState.next(value);
  // }
}
