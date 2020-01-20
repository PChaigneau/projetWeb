import { Component, OnInit } from '@angular/core';
import { Destination } from '../Model/destination';

@Component({
  selector: 'app-page-destinations',
  templateUrl: './page-destinations.component.html',
  styleUrls: ['./page-destinations.component.css']
})
export class PageDestinationsComponent implements OnInit {

  constructor(private destinationService: DestinationService) { }
  public selectedDestination:Destination;
  public DESTINATIONS :Destination[];

  ngOnInit() {
    this.DESTINATIONS= this.destinationService.getDestination()
  }

}

// page qui afiche toutes les cartes "destination" (onglet navbar)