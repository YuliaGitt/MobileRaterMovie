import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ApiService } from './api.service'
import { Movie } from './models/Movie'

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {
  movie: Movie;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.apiService.getMovie(id).subscribe(
      (data:Movie) => {
        this.movie = data;
      },
      error => console.log(error)
    )
  }
}
