export class Destination {

    private id:string;
    public continent:string;
    public pays:string;
    private region:string;
    private description: string;
    private deleted:string;
    private images:string[]; // chemin du fichier contenant l'image associée à la destination dans la BDD
    
    private periode:string; // mois correspondants aux dates

    constructor(id:string,pays:string,region:string,description:string, images:string[],deleted:string) {
        this.id=id;
        this.region=region;
        this.description=description;
        this.images=images;
        this.deleted=deleted;
    }
}