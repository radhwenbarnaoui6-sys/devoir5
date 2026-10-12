import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css'
})
export class AddMovie {

  newMovie = new Movie();
  categories! : Categorie[];
  newIdCat! : number;

  message! : string;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories = this.movieService.listeCategories();
  }

  addMovie(){

    this.newMovie.categorie = this.movieService.consulterCategorie(this.newIdCat);
    this.movieService.ajouterMovie(this.newMovie);
    this.router.navigate(['movies']);
  }
}
