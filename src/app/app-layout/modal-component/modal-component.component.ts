import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-modal-component',
	templateUrl: './modal-component.component.html',
	styleUrls: ['./modal-component.component.sass']
})
export class ModalComponentComponent implements OnInit {

	constructor(private router: Router, private route: ActivatedRoute) { }

	closeDialog() {
		// debugger
		this.router.navigate([".."], { relativeTo: this.route })

	}
	ngOnInit(): void {
	}

}
