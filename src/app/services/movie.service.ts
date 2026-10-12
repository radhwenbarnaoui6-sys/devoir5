import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies : Movie[]; //un tableau de Movie
  categories: Categorie[];


  movie! : Movie;

  constructor() {
    this.categories = [
      {idCategorie : 1, nomCategorie : "Action"},
      {idCategorie : 2, nomCategorie : "Comédie"},
      {idCategorie : 3, nomCategorie : "Drame"},
      {idCategorie : 4, nomCategorie : "Science-Fiction"},
      {idCategorie : 5, nomCategorie : "Horreur"}
    ]; 
    
  
    this.movies = [
      { idMovie : 1, titreMovie : "Inception", realisateur : "Christopher Nolan", dureeMin : 148, noteMovie : 8.8, dateSortie : new Date("07/16/2010"), categorie : {idCategorie : 4, nomCategorie : "Science-Fiction"}},
      { idMovie : 2, titreMovie : "The Shawshank Redemption", realisateur : "Frank Darabont", dureeMin : 142, noteMovie : 9.3, dateSortie : new Date("09/23/1994"), categorie : {idCategorie : 3, nomCategorie : "Drame"}},
      { idMovie : 3, titreMovie : "The Dark Knight", realisateur : "Christopher Nolan", dureeMin : 152, noteMovie : 9.0, dateSortie : new Date("07/18/2008"), categorie : {idCategorie : 1, nomCategorie : "Action"}},
      { idMovie : 4, titreMovie : "get out", realisateur : "Jordan Peele", dureeMin : 104, noteMovie : 7.7, dateSortie : new Date("02/24/2017"), categorie : {idCategorie : 5, nomCategorie : "Horreur"}},
      { idMovie : 5, titreMovie : "Interstellar", realisateur : "Christopher Nolan", dureeMin : 169, noteMovie : 8.7, dateSortie : new Date("11/07/2014"), categorie : {idCategorie : 4, nomCategorie : "Science-Fiction"}}
    ];
   }

    listeMovies():Movie[] {
      return this.movies;
    }

    ajouterMovie( frag: Movie){
      this.movies.push(frag);
    }

    supprimerMovie( frag: Movie){
      //supprimer la movie frag du tableau movies
       const index = this.movies.indexOf(frag, 0);
       if (index > -1) {
         this.movies.splice(index, 1);
       }
     }

     consulterMovie(id:number): Movie{
      this.movie =  this.movies.find(f => f.idMovie == id)!;
        return this.movie;
     }

     trierMovies(){
      this.movies = this.movies.sort((n1,n2) => {
        if (n1.idMovie! > n2.idMovie!) {
            return 1;
        }
       if (n1.idMovie! < n2.idMovie!) {
            return -1;
        }
      return 0;
    });
    }

    updateMovie(f:Movie)
    {
      this.supprimerMovie(f);
      this.ajouterMovie(f);
      this.trierMovies();
    }
    listeCategories():Categorie[]{
      return this.categories;
    }
    consulterCategorie(id:number): Categorie{
      return this.categories.find(cat => cat.idCategorie == id)!;

    }

}
