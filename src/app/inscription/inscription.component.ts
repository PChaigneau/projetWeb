import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
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
      nom: new FormControl(),
      prenom: new FormControl(),
      civilite: new FormControl(),
      date_naissance:new FormControl(),
    })
  }

  onSubmit(){
    console.log(this.userForm.value)
  }

}
