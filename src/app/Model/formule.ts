import { Destination } from './destination';
import { Utilisateur } from './utilisateur';


export class Formule {

    public id:string;
    public destination:Destination;
    public date_depart:string;
    public date_retour:string;
    public prix_ht:string;
    public deleted:string;
    public nb_places:string;
    public promotion:string;

    constructor(id:string,destination:Destination,date_depart:string,date_retour:string,nb_places:string,prix_ht:string,deleted:string, promotion:string) {
        this.id=id;
        this.destination=destination;
        this.date_depart=date_depart;
        this.date_retour=date_retour;
        this.nb_places=nb_places;
        this.prix_ht=prix_ht;
        this.deleted=deleted;
        this.promotion=promotion;
        
    }
}