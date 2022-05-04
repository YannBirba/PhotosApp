import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';
import { currentUser, logout } from 'src/shared/state/auth/auth.actions';
import { selectCurrentUser } from 'src/shared/state/auth/auth.selector';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public currentUser$: Observable<User> | null = null;

  constructor(private store: Store<{ currentUser: User }>) {}
  logout(): void {
    this.store.dispatch(logout());
  }

  ngOnInit(): void {
    this.currentUser$ = this.store.select(selectCurrentUser);
  }
}
