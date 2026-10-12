import { Routes } from '@angular/router';
import { Movies } from './movies/movies';
import { AddMovie } from './add-movie/add-movie';
import { UpdateMovie } from './update-movie/update-movie';

export const routes: Routes = [
    {path: "movies", component : Movies},
    {path: "add-movie", component : AddMovie},
    {path: "updateMovie/:id", component: UpdateMovie},
    {path: "", redirectTo: "movies", pathMatch: "full"}
];
