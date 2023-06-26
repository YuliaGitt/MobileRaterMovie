import { Component, OnInit } from '@angular/core';

import {Auth} from '../models/Auth'

@Component({
	moduleId: module.id,
	selector: 'auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
	public auth : Auth;

	constructor() { }

	ngOnInit() { 
		this.auth = {username : "", password : ""};
	}
}