import { Component, Input, OnInit } from '@angular/core';
import { Role } from '../../../models/enums/role.enum';
import { getUserDetails } from '../../Functions/getUserDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent implements OnInit {
  @Input() roleInput: any;
  public role = Role;
  public isLoggedIn = false;
  constructor(private router: Router) {
    if (getUserDetails()) {
      this.isLoggedIn = true;
    }
  }

  ngOnInit() {}

  logout() {
    sessionStorage.clear();
    if (this.router.url === '/') {
      this.isLoggedIn = false;
    } else {
      this.router.navigate(['/']);
    }
  }
}
