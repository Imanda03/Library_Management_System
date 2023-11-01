import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() menuClicked = new EventEmitter<boolean>();

  constructor(public api: ApiService) {}

  logOut() {
    this.api.deleteToken();
  }
}
