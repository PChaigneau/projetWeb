import { Voyage } from './voyage';

export class DossierResa {

    private numCarte:number;
    private voyage:Voyage;
    private assurance:boolean;

    constructor(numCarte:number, voyage:Voyage, assurance:boolean) {
        this.numCarte=numCarte;
        this.voyage=voyage;
        this.assurance=assurance;
    }
}