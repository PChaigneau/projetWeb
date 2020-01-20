import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formule } from '../Model/formule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormuleService {

  constructor(private httpClient:HttpClient) { }

  getFormules():Observable<Formule[]>{
    return this.httpClient.get<Formule[]>('api/formules')
  }

  updateFormule(formule){
    return this.httpClient.put('api/formules', formule) }

  createFormule(formule){
    return this.httpClient.post('api/formules', formule);
  }

  findFormule(id):Observable<Formule>{
    return this.httpClient.get<Formule>('api/formules/'+id);
  }

  deleteFormule(id):Observable<Formule>{
    return this.httpClient.delete<Formule>('api/formules/'+id);
  }


}
