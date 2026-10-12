import { Categorie } from "./categorie.model";

export class Movie {
    idMovie? : number;
    titreMovie? : string;
    realisateur? : string;
    dureeMin? : number;
    noteMovie? : number;
    dateSortie? : Date ;
    categorie? : Categorie;
}
