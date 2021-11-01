import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public currentYear : number = environment.CURRENT_YEAR;
  public appVersion : string = environment.APP_VERSION;
  constructor() { }

  ngOnInit(): void {
  }

}
