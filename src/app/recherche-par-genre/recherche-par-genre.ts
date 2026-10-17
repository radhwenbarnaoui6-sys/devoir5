import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Genre } from '../model/genre.model';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-recherche-par-genre',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-genre.html',
})
export class RechercheParGenre implements OnInit {
  genres: Genre[] = [];
  movies: Movie[] = [];
  selectedGenreId: number | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.genres = this.movieService.listeGenres();
    this.movies = this.movieService.listeMovies();
  }

  onChange(): void {
    this.movies = this.selectedGenreId === null
      ? this.movieService.listeMovies()
      : this.movieService.rechercherParGenre(this.selectedGenreId);
  }
}
