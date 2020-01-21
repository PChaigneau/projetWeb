import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from '../Model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged:boolean;
  user:Utilisateur; 

  constructor(private router:Router, private utilisateurService:UtilisateurService) { 
    this.isLogged = false;
  }

  login(email:string, motDePasse:string){
    this.utilisateurService.findUser(email).subscribe(
      (result)=> this.user = result);
     if(email===this.user.email && motDePasse===this.user.motDePasse)    
     this.isLogged = true;
     this.router.navigate(['accueil']);
   }

  logout(){
    this.isLogged = false;

    this.router.navigate(['accueil'])
  }

  islogged(){
    return this.isLogged;
  }

}
