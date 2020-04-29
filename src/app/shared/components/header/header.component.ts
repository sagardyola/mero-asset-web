import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user;
  constructor(
    public router: Router
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
