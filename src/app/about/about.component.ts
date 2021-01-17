import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
	routerpath: string;
	constructor() { }
	ngOnInit(): void {
		console.log('test')
	}

}
