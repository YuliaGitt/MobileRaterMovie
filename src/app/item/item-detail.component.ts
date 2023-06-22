import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ApiService } from './api.service'
import { Movie } from '../models/Movie'

import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})

export class ItemDetailComponent implements OnInit {
  movie: Movie;
  highlights : number;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private raouteExtantons : RouterExtensions,
              private router : Router) {}

    ngOnInit(): void {
    this.highlights = 0;
    const id = this.activatedRoute.snapshot.params.id;
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

    goBack(){
      this.raouteExtantons.backToPreviousPage()
    }

    editClicked(){
      this.router.navigate(["/edit",this.movie.id])
    }
}
