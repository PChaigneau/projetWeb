import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationService } from '../shared/destination.service';

@Component({
  selector: 'app-infos-destination',
  templateUrl: './infos-destination.component.html',
  styleUrls: ['./infos-destination.component.css']
})
export class InfosDestinationComponent implements OnInit {

  public imagesrc = 'assets/queen.jpg'
  color = 'red';
  isBad = '';

 
  // @Input() Album; si on voulait  appeler Album dans le html parent


  constructor(private activatedRoutes: ActivatedRoute , private destService:DestinationService) { }

  ngOnInit() {
    // this.activatedRoutes.paramMap.subscribe(
    //   (params)=>{
    //     console.log(params.get('id'))
    //     const nameDestination=params.get('id');
    //     this.Album=this.destService.findDestination(nameDestination);
    //   }
    // )

  }
  }


