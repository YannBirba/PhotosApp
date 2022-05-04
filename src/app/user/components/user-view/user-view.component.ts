import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';
import { currentUser, currentUserUpdate } from 'src/shared/state/auth/auth.actions';
import { selectCurrentUser } from 'src/shared/state/auth/auth.selector';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {
  public currentUser$: Observable<User> | null = null;
  public currentUserUpdateForm: FormGroup;

  constructor(
    private store: Store<{ currentUser: User }>,
    private formBuilder: FormBuilder
  ) {
    this.currentUserUpdateForm = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      email: [
        null,
        [Validators.required, Validators.email],
      ],
      group_id: [null],
    });
  }

  ngOnInit(): void {
    this.currentUser$ = this.store.select(selectCurrentUser);
  }
  openModal(dialog: any, currentUser : User): void {
    dialog.showModal();
    this.currentUserUpdateForm.patchValue(currentUser);
  }
  closeModal(dialog: any): void {
    dialog.close();
  }
  onSubmitUpdate(): void {
    const currentUser: User = this.currentUserUpdateForm.value;
    this.store.dispatch(currentUserUpdate({ currentUser }));
  }
}
