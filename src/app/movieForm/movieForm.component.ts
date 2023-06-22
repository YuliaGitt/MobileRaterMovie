import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
	selector: 'ns-movieForm',
	templateUrl: './movieForm.component.html',
	styleUrls: ['./movieForm.component.css']
})

export class MovieFormComponent implements OnInit {

	constructor(private routerExtemtions : RouterExtensions) { }

	ngOnInit() { }

	goBack(){
		this.routerExtemtions.backToPreviousPage()
	}
}