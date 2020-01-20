// classe stockant les informations des clients et accompagnants

export class Utilisateur {

    private id:string;
    private civilité: string;
    private nom: string;
    private prenom: string;
    private date_naissance: string;
    private adresse: string; // classe spécifique ?
    private telephone: number;

    constructor(id:string,civilité: string, nom: string, prenom: string, dateDeNaissance: string, adresse: string, telephone: number) {
        this.id=id;
        this.civilité = civilité;
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = dateDeNaissance;
        this.adresse = adresse;
        this.telephone = telephone;
    }
}