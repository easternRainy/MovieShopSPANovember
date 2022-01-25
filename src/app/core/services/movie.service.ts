import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieCard } from '../../shared/models/moviecard';
import { environment } from '../../../environments/environment';
import { Movie } from '../../shared/models/Movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // private readonly HttpClient _httpClient
  constructor(private http: HttpClient) { }

  // HttpClient to make the API call, comes from HttpClientModule

  // HomeComponent is gonna call this method
  getTopGrossingMovies(): Observable<MovieCard[]> {

    // call the API URL using HttpClient class
    return this.http.get<MovieCard[]>(`${environment.apiBaseUrl}movies/top-grossing`);

  }

  getMovieDetails(id: number): Observable<Movie> {

    return this.http.get<Movie>(`${environment.apiBaseUrl}movies/${id}`);

  }

}
