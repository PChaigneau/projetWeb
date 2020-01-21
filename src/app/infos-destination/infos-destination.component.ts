import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationService } from '../shared/destination.service';
import { Destination } from '../Model/destination';
import { Formule } from '../Model/formule';
import { FormuleService } from '../shared/formule.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-infos-destination',
  templateUrl: './infos-destination.component.html',
  styleUrls: ['./infos-destination.component.css']
})
export class InfosDestinationComponent implements OnInit {




  // @Input() Album; si on voulait  appeler Album dans le html parent


  constructor(private activatedRoutes: ActivatedRoute, private destService: DestinationService, private formuleService: FormuleService) { }

  public selectedDestination: Destination;
  destination: Destination;
  formule:Formule;
  listeFormules: Formule[];
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

        this.DESTINATIONS = _.uniqBy(this.DESTINATIONS, 'id')

        this.activatedRoutes.paramMap.subscribe(
          (params) => {
            const idDestination = params.get('id');
            for (const destination of this.DESTINATIONS) {
              if (destination.id === idDestination) {
                this.destination = destination
              }
            }
            for(const formule of this.listeFormules)
            if (formule.destination.id === this.destination.id) {
              this.formule=formule
            }
          }
        )
      }
    )}

  

  }

