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
  highlights : number;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) {}

    ngOnInit(): void {
    this.highlights = 0;
    const id = this.route.snapshot.params.id;
    this.getDetails(id);
  }

    setHighlight(rate :number){
      this.highlights = rate;
    }
    rateClicked(){
      this.apiService.rateMovie(this.highlights,this.movie.id).subscribe(
        date => this.getDetails(this.movie.id),
        error => console.log(error)
      )
    }

    getDetails(id : number){
      this.apiService.getMovie(id).subscribe(
        (data:Movie) => {
          this.movie = data;
        },
        error => console.log(error)
      )
    }
}
