import { Component } from '@angular/core';
import {AuthService} from "../../../core/auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {
  constructor(private authService: AuthService)  {
  }
  login() {
    this.authService.logIn();
  }

  logout() {
    this.authService.logOut();
  }
}
