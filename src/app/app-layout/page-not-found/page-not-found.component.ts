import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {
	routerpath: any;

	constructor(private router: Router) { }

	ngOnInit(): void {
		this.routerpath = this.router.url
		this.router.events.subscribe(() => { this.routerpath = this.router.url })
	}

}
