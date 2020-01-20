// classe stockant les informations des clients et accompagnants

export class Utilisateur {

    private civilité: string;
    private nom: string;
    private prenom: string;
    private dOB: Date;
    private adresse: string; // classe spécifique ?
    private telephone: number;

    constructor(civilité: string, nom: string, prenom: string, dateDeNaissance: Date, adresse: string, telephone: number) {
        this.civilité = civilité;
        this.nom = nom;
        this.prenom = prenom;
        this.dOB = dateDeNaissance;
        this.adresse = adresse;
        this.telephone = telephone;
    }
}