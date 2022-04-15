import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() name: string | null = null;
  @Input() email: string | null = null;
  @Input() groupName: string | null = null;
  @Input() is_admin: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
