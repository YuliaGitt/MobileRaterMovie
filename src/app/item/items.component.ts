import { Component, OnInit } from '@angular/core'

import { ApiService } from '../api.service'
import { Movie } from '../models/Movie'
import { Router } from '@angular/router';

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  movies: Array<Movie>;

  constructor(private apiService : ApiService,
              private router : Router) {}

  ngOnInit(): void {
    this.apiService.getMovies().subscribe(
      (data:Movie[]) => {
        this.movies = data;
      },
      error => console.log(error)
    )
  }

  newMovie(){
    this.router.navigate(['/edit', -1])
  }
}
