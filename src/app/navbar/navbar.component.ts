import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title='Bo Voyage';
  isLogged: boolean;

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  getFormatteddate(){
    return new Date().toLocaleDateString();
  }
  logout(){
    this.loginService.logout();  // login service
    this.isLogged=this.loginService.islogged();
    
  }
}


