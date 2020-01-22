import { Component, OnInit } from '@angular/core';
import { Formule } from '../Model/formule';
import { Destination } from '../Model/destination';
import * as _ from 'lodash';
import { FormuleService } from '../shared/formule.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private formuleService: FormuleService, private loginService:LoginService) { }

  public selectedDestination: Destination;
  destination: Destination;
  listeFormules: Formule[];
  formulesEnPromo: Formule[];
  public DESTINATIONS: Destination[];

  ngOnInit() {
    this.listeFormules = [];
    this.formulesEnPromo = [];
    this.DESTINATIONS = [];


    this.formuleService.getFormules().subscribe(
      (result) => {
        this.listeFormules = result;
        for (const formule of this.listeFormules) {
          this.DESTINATIONS.push(formule.destination)          
        }
        this.DESTINATIONS = _.uniqBy(this.DESTINATIONS, 'id')
        this.formulesEnPromo = this.listeFormules.filter((formule)=>formule.promotion);
      }
    )

  }

  isLogged(id){
    if(this.loginService.isLogged){return "/paiement/"+id;}
    else {return "/connexion";}   

  }



}
