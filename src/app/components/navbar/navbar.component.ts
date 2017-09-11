import { Component, OnInit } from '@angular/core';

//Import Auth0 service
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor( private auth: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.auth.login();
  }

}