import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      nom: new FormControl(),
      prenom: new FormControl(),
      civilite: new FormControl(),
      date_naissance: new FormControl(),
    })
  }

  onSubmit() {
    console.log(this.userForm.value)
  }

  
}

