import { Component, OnInit } from '@angular/core';
import { Destination } from '../Model/destination';
import { FormuleService } from '../shared/formule.service';
import { Formule } from '../Model/formule';
import * as _ from 'lodash';

@Component({
  selector: 'app-page-destinations',
  templateUrl: './page-destinations.component.html',
  styleUrls: ['./page-destinations.component.css']
})
export class PageDestinationsComponent implements OnInit {

  ///public destination : Destination

  listeFormules: Formule[];

  constructor(private formuleService: FormuleService) { }
  public selectedDestination: Destination;
  public DESTINATIONS: Destination[];

  ngOnInit() {
    this.listeFormules = [];
    this.DESTINATIONS = [];

    this.formuleService.getFormules().subscribe(
      (result) => {
        this.listeFormules = result;  
        for (const formule of this.listeFormules) {
          this.DESTINATIONS.push(formule.destination)
        } 
          
       this.DESTINATIONS=_.uniqBy(this.DESTINATIONS,'id')

      })

  }
}

 

// page qui afiche toutes les cartes "destination" (onglet navbar)