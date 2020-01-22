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

  userForm: FormGroup;
  logForm: FormGroup;

  constructor(private utilisateurService:UtilisateurService, private loginService:LoginService, private router:Router) { }


  ngOnInit() {
    this.userForm = new FormGroup({
      nom: new FormControl('',[Validators.required]),
      prenom: new FormControl('',[Validators.required]),
      civilite: new FormControl('',[Validators.required]),
      date_naissance: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      motDePasse: new FormControl('',[Validators.required]),
    })    
    
    this.logForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      motDePasse: new FormControl('',[Validators.required]),
    })


  }

  login() {    
    
    this.loginService.login(this.logForm.value.email, this.logForm.value.motDePasse);
  }

  onLogSubmit() {if(this.logForm.valid)this.loginService.login(this.logForm.value.email, this.logForm.value.motDePasse);}

  
  onUserSubmit() {
    if(this.userForm.valid){
      const newUser = this.userForm.value;
      this.utilisateurService.createUser(newUser).subscribe(
        () => this.loginService.login(newUser.email, newUser.motDePasse)
      )
    }
    
  }
  





}
