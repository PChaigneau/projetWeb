import { Component, OnInit } from '@angular/core';
import { Formule } from '../Model/formule';
import { Utilisateur } from '../Model/utilisateur';
import { UtilisateurService } from '../shared/utilisateur.service';
import { LoginService } from '../shared/login.service';
import { ActivatedRoute } from '@angular/router';
import { FormuleService } from '../shared/formule.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  formule: Formule;
  user: Utilisateur;

  constructor(private utilisateurService: UtilisateurService, private formuleService: FormuleService, private loginService: LoginService, private activatedRoutes: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.loginService.user;
    this.activatedRoutes.paramMap.subscribe(
      (params) => {
        const idFormule = params.get('id');
        this.formuleService.findFormule(idFormule).subscribe(
          (result) => this.formule = result
        )
      }
    )

  }

}
