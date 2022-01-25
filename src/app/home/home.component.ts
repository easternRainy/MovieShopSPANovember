import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { MovieCard } from '../shared/models/moviecard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movieCards!: MovieCard[];

  // HomeComponent will MovieService with DI
  // ngOnInit() is one of the important lifecycle hooks methods
  ngOnInit(): void {
    // use to call the API
    this.movieService.getTopGrossingMovies().subscribe(
      // we need to initalize our data object
      m => {
        this.movieCards = m;

      }

    )

  }

}
