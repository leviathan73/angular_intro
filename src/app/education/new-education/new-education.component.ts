import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-new-education',
	template: `
	<app-modal-component>
    <p>
      new-education works!
	</p>
	</app-modal-component>
  `,
	styles: [
		`
      :host {
        display: block;
      }
    `
	]
})
export class NewEducationComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
