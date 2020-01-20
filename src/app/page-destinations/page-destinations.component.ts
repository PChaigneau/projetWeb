import { Component, OnInit } from '@angular/core';
import { Destination } from '../Model/destination';
import { DestinationService } from '../shared/destination.service';

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
    this.DESTINATIONS= this.destinationService.getDestinations()
  }

}

// page qui afiche toutes les cartes "destination" (onglet navbar)