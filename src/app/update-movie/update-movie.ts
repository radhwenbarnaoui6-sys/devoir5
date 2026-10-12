import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-movie',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-movie.html',
  styles: ``
})
export class UpdateMovie implements OnInit {
  currentMovie = new Movie();

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private movieService: MovieService
) { }

  ngOnInit() {
    this.currentMovie = this.movieService.consulterMovie(this.activatedRoute.snapshot.params['id']);
  }

  updateMovie()
  {
    this.movieService.updateMovie(this.currentMovie);
    this.router.navigate(['movies']);
  }
}
