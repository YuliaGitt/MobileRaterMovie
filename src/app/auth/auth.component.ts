import { Component, OnInit } from '@angular/core';

import {Auth} from '../models/Auth'
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { setString, getString } from '@nativescript/core/application-settings';

@Component({
	moduleId: module.id,
	selector: 'auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
	
	public auth : Auth;
	registerMode : boolean;

	constructor(private apiService : ApiService,
				private router : Router) { }

	ngOnInit() { 
		this.registerMode = false;
		const myToken = getString("mr-token");
    	//if(myToken){
      	//this.router.navigate(['/items'])
    	//} else {
      	this.auth = {username: "", password: ""};
	}

	submitForm(){
		if(this.registerMode){
			this.apiService.registerUser(this.auth).subscribe(
				(data : any) => {
					this.loginFunction();
				},
				error => console.log(error)
			)
		} else {
			this.loginFunction();
		}
	}

	loginFunction(){
		this.apiService.loginUser(this.auth).subscribe(
			(data : any) => {
				setString("mr-token" , data.token);
				this.router.navigate(['/items']);
			},
			error => console.log(error)
		)
	}
}