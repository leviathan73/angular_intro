import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../app-config';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})


export class HeaderComponent implements OnInit {

	title: string;

	constructor(@Inject(APP_CONFIG) private config: AppConfig) { }

	ngOnInit(): void {
		this.title = this.config.title;
	}

}
