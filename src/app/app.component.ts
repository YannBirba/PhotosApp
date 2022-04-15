import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';
import { currentUser } from 'src/shared/state/auth/auth.actions';
import { selectCurrentUser } from 'src/shared/state/auth/auth.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentUser$: Observable<User> | null = null;
  constructor(private store: Store<{ currentUser: User }>) {}

  ngOnInit(): void {
    this.store.dispatch(currentUser());
    this.currentUser$ = this.store.select(selectCurrentUser);
  }
}
