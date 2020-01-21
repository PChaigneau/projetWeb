import { Injectable } from '@angular/core';
import { Utilisateur } from '../Model/utilisateur';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<Utilisateur[]>{
    return this.httpClient.get<Utilisateur[]>('api/voyageurs')
  }

  updateUser(utilisateur){
    return this.httpClient.put('api/voyageurs', utilisateur) }

  createUser(utilisateur){
    return this.httpClient.post('api/voyageurs', utilisateur);
  }

  findUser(id):Observable<Utilisateur>{
    return this.httpClient.get<Utilisateur>('api/voyageurs/'+id);
  }

  deleteUser(id):Observable<Utilisateur>{
    return this.httpClient.delete<Utilisateur>('api/voyageurs/'+id);
  }
}
