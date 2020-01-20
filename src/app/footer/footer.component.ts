import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public mentionsLegales: string = 'Copyright © 2020 Bo Voyage';
  

  ngOnInit() {
  }

}
