import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/shared/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  private subscription: any;
  constructor(private authService: AuthService) { }
  logout(): void {
    const response$: Observable<any> = this.authService.logout();
    this.subscription = response$.subscribe(
      (response) => console.log(response),
      (responseError) => console.error(responseError),
      () => console.log('DONE!')
    );
  }
}
