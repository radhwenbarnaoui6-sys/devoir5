import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie.service';
import { Genre } from '../model/genre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css'
})
export class AddMovie {

  newMovie = new Movie();
  genres! : Genre[];
  newIdGenre! : number;

  message! : string;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.genres = this.movieService.listeGenres();
  }

  addMovie(){

    this.newMovie.genre = this.movieService.consulterGenre(this.newIdGenre);
    this.movieService.ajouterMovie(this.newMovie);
    this.router.navigate(['movies']);
  }
}
