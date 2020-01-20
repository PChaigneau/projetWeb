export class Destination {

    private continent:string;
    private pays:string;
    private region:string;
    private descr: string;
    private imagePath:string; // chemin du fichier contenant l'image associée à la destination dans la BDD
    private datesAR:Date[]; //2 dates : dates aller-retour imposée
    private periode:string; // mois correspondants aux dates

    constructor(continent:string,pays:string,region:string,description:string,datesAllerRetour:Date[],periode:string, imagePath:string,) {
        this.continent=continent;
        this.continent=pays;
        this.region=region;
        this.descr=description;
        this.imagePath=imagePath;
        this.datesAR=datesAllerRetour;
        this.periode=periode;
    }
}