import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { NavigationItems } from './navigation-items';
@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

	navigationItems: NavigationItems[] = [
		{ title: "About", path: "/", icon: "description" },
		{ title: "Skills", path: "/skills", icon: "view_list" },
		{ title: "Education", path: "/education", icon: "view_list" },
		{ title: "Intrests", path: "/intrests", icon: "view_list" },
		{ title: "Composer", path: "/composer", icon: "rule" },
		{ title: "404", path: "/404", icon: "error" }];

	constructor(private router: Router) { }

	routerpath: string;

	changeView($event) {
		console.log($event)
	}

	ngOnInit(): void {
		this.router.events.subscribe(() => { this.routerpath = this.router.url })
	}

}
