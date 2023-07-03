import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Auth} from '../models/Auth'
import { ApiService } from '../api.service';
import { setString, getString } from '@nativescript/core/application-settings';
import { SnackBar, SnackBarOptions } from "@nstudio/nativescript-snackbar";
import { backgroundColorProperty } from '@nativescript/core';

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
				},error => {
					const snackbar = new SnackBar()
					snackbar.simple(`The username has already been allocated to another user`)
					}
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
			}, error => {
			const snackbar = new SnackBar()
			snackbar.simple(`Looks like either your email address or password were incorrect. Wanna try again?`)
			}
		)
	}
}