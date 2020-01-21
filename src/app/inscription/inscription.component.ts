import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilisateurService } from '../shared/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  userForm: FormGroup;

  constructor(private utilisateurService:UtilisateurService, private router:Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      nom: new FormControl('',[Validators.required]),
      prenom: new FormControl('',[Validators.required]),
      civilite: new FormControl('',[Validators.required]),
      date_naissance: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      motDePasse: new FormControl('',[Validators.required]),
    })
  }

  onSubmit() {
    if(this.userForm.valid){
      const utilisateur = this.userForm.value;
      this.utilisateurService.createUser(utilisateur).subscribe(
        ()=> this.router.navigate(['/accueil'])
      )
    }
  }

  
}

