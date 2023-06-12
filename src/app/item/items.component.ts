import { Component, OnInit } from '@angular/core'

import { ApiService } from './api.service'
import { Movie } from './models/Movie'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  movies: Array<Movie>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMovies().subscribe(
      data => {
          this.movies = data; 
      },
      error => console.log("ERROR!!! : ",error)
    )
  }
}
