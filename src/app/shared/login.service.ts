import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged:boolean;

  constructor(private router:Router) { 
    this.isLogged = false;
  }

  logout(){
    this.isLogged = false;

    this.router.navigate(['accueil'])
  }

  islogged(){
    return this.isLogged;
  }
}
