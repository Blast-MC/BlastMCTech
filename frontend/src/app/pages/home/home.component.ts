import { Component } from '@angular/core';
import { SiteComponent } from '../../lifecycle/SiteComponent';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	standalone: false,
})
export class HomeComponent extends SiteComponent {


	constructor() {
		super()
	}

	override ngOnInit() {

	}

}
