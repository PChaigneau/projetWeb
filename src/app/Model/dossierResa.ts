import { Formule } from './formule';

export class DossierResa {

    private numCarte:number;
    private formule:Formule;
    private assurance:boolean;

    constructor(numCarte:number, formule:Formule, assurance:boolean) {
        this.numCarte=numCarte;
        this.formule=formule;
        this.assurance=assurance;
    }
}