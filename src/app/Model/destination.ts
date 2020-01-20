export class Destination {

    public id:string;
    //public continent:string;
    //public pays:string;
    public region:string;
    public description: string;
    public deleted:string;
    public images:string[]; // chemin du fichier contenant l'image associée à la destination dans la BDD
    
    //public periode:string; // mois correspondants aux dates

    constructor(id:string,pays:string,region:string,description:string, images:string[],deleted:string) {
        this.id=id;
        this.region=region;
        this.description=description;
        this.images=images;
        this.deleted=deleted;
    }
}