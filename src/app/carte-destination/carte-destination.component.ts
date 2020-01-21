import { Component, OnInit, Input } from '@angular/core';
import { Destination } from '../Model/destination';

@Component({
  selector: 'app-carte-destination',
  templateUrl: './carte-destination.component.html',
  styleUrls: ['./carte-destination.component.css']
})
export class CarteDestinationComponent implements OnInit {

  @Input() destination:Destination

  constructor() { }

  ngOnInit() {
  }

}
