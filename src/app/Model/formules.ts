import { Destination } from './destination';
import { Utilisateur } from './utilisateur';


export class Formules {

    private id:string;
    private destination:Destination;
    private date_depart:string;
    private date_retour:string;
    private prix_ht:string;
    private deleted:string;
    private nb_places:string;
    private promotion:string;

    constructor(id:string,destination:Destination,date_depart:string,date_retour:string,nb_places:string,prix_ht:string,deleted:string, promotion:string) {
        
        this.destination=destination;
        this.date_depart=date_depart;
        this.date_retour=date_retour;
        this.nb_places=nb_places;
        this.prix_ht=prix_ht;
        this.deleted=deleted;
        this.promotion=promotion;
        
    }
}