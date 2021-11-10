import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from 'src/models/auth-state/auth-state.model';
import { AuthService } from 'src/shared/services/auth/auth.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent{
  constructor() {
  }

}
