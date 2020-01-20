import { Destination } from './destination';
import { Utilisateur } from './utilisateur';


export class Voyage {

    private destination:Destination;
    private aller:Date;
    private retour:Date;
    private participants:Utilisateur[]; //le client qui paye et ses accompagnants
    private prix:number; //mettre un prix dans Destination ?

    constructor(destination:Destination,aller:Date,retour:Date,participants:Utilisateur[],prix:number) {
        this.destination=destination;
        this.aller=aller;
        this.retour=retour;
        this.participants=participants;
        this.prix=prix;
        
    }
}