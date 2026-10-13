import { Genre } from "./genre.model";

export class Movie {
    idMovie? : number;
    titreMovie? : string;
    realisateur? : string;
    dureeMin? : number;
    noteMovie? : number;
    dateSortie? : Date ;
    genre? : Genre;
}
