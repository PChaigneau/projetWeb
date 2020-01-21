import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Destination } from '../Model/destination';
import { Observable } from 'rxjs';
import { FormuleService } from './formule.service';
import { Formule } from '../Model/formule';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  listeFormules:Formule[];
  listeDestinations:Destination[];

  constructor(private httpClient:HttpClient, private formuleService:FormuleService) { }

  getDestinations(){
    this.formuleService.getFormules().subscribe(
      (result) => {this.listeFormules = result;})
    for (const formule of this.listeFormules) {
      this.listeDestinations.push(formule.destination)
    }
    return this.listeDestinations;
  }


  findDestination(id):Observable<Formule>{
    return this.httpClient.get<Formule>('api/formules/'+id);
  }

  deleteDestination(id):Observable<Destination>{
    return this.httpClient.delete<Destination>('api/formules/'+id);
  }
}
