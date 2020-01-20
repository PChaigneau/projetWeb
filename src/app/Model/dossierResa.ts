import { Formules } from './formules';

export class DossierResa {

    private numCarte:number;
    private formule:Formules;
    private assurance:boolean;

    constructor(numCarte:number, formule:Formules, assurance:boolean) {
        this.numCarte=numCarte;
        this.formule=formule;
        this.assurance=assurance;
    }
}