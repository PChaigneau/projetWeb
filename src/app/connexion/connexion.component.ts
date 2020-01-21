import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilisateurService } from '../shared/utilisateur.service';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {  

  logForm: FormGroup;

  constructor(private loginService:LoginService, private router:Router) { }




  ngOnInit() { 
    this.logForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      motDePasse: new FormControl('',[Validators.required]),
    })   

  }

  login() {    
    
    this.loginService.login(this.logForm.value.email, this.logForm.value.motDePasse);
  }

  islogged() {
    return this.loginService.islogged()
  }

  onSubmit() {if(this.logForm.valid) this.login();}
  





}
