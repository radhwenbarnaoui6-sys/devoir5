import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
import { Genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies : Movie[]; //un tableau de Movie
  genres: Genre[];


  movie! : Movie;

  constructor() {
    this.genres = [
      {idGenre : 1, nomGenre : "Action"},
      {idGenre : 2, nomGenre : "Comédie"},
      {idGenre : 3, nomGenre : "Drame"},
      {idGenre : 4, nomGenre : "Science-Fiction"},
      {idGenre : 5, nomGenre : "Horreur"}
    ]; 
    
  
    this.movies = [
      { idMovie : 1, titreMovie : "Inception", realisateur : "Christopher Nolan", dureeMin : 148, noteMovie : 8.8, dateSortie : new Date("07/16/2010"), genre : {idGenre : 4, nomGenre : "Science-Fiction"}},
      { idMovie : 2, titreMovie : "The Shawshank Redemption", realisateur : "Frank Darabont", dureeMin : 142, noteMovie : 9.3, dateSortie : new Date("09/23/1994"), genre : {idGenre : 3, nomGenre : "Drame"}},
      { idMovie : 3, titreMovie : "The Dark Knight", realisateur : "Christopher Nolan", dureeMin : 152, noteMovie : 9.0, dateSortie : new Date("07/18/2008"), genre : {idGenre : 1, nomGenre : "Action"}},
      { idMovie : 4, titreMovie : "get out", realisateur : "Jordan Peele", dureeMin : 104, noteMovie : 7.7, dateSortie : new Date("02/24/2017"), genre : {idGenre : 5, nomGenre : "Horreur"}},
      { idMovie : 5, titreMovie : "Interstellar", realisateur : "Christopher Nolan", dureeMin : 169, noteMovie : 8.7, dateSortie : new Date("11/07/2014"), genre : {idGenre : 4, nomGenre : "Science-Fiction"}}
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
    listeGenres():Genre[]{
      return this.genres;
    }
    consulterGenre(id:number): Genre{
      return this.genres.find(genre => genre.idGenre == id)!;

    }

}
