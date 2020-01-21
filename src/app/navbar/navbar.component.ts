import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Utilisateur } from '../Model/utilisateur';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title='Bo Voyage';
  isLogged: boolean;
  utilisateur:Utilisateur;

  constructor(private loginService : LoginService) { }

  ngOnInit() {
    this.isLogged = false;
    this.utilisateur = this.loginService.user
  }

  getFormatteddate(){
    return new Date().toLocaleDateString();
  }
  logout(){
    this.loginService.logout();
    this.isLogged=this.loginService.islogged();
    
  }
}


