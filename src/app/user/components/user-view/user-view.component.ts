import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user/user.model';
import { AuthService } from 'src/shared/services/auth/auth.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  user$!: Observable<User>;
  constructor(private authService: AuthService) {
  }

ngOnInit(): void {
  this.getUserProfile();
  this.user$.subscribe(user => console.log(user.is_admin));
  }
  getUserProfile() {
    this.user$ = this.authService.getUser();
  }
}