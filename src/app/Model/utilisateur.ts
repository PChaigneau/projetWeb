// classe stockant les informations des clients et accompagnants

export class Utilisateur {

    public id:string;
    public civilite: string;
    public nom: string;
    public prenom: string;
    public date_naissance: string;
    public adresse: string; // classe spécifique ?
    public telephone: string;
    public email:string;
    public motDePasse:string;

    constructor(id:string,email:string, motDePasse:string,civilite: string, nom: string, prenom: string, date_naissance: string, adresse:string, telephone:string) {
        this.id=id;
        this.email=email;
        this.motDePasse=motDePasse;
        this.civilite = civilite;
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;
        this.adresse = adresse;
        this.telephone = telephone;
    }
}