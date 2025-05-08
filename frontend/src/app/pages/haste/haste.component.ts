import { Component } from '@angular/core';
import { SiteComponent } from '../../lifecycle/SiteComponent';

@Component({
	selector: 'app-haste',
	templateUrl: './haste.component.html',
	styleUrl: './haste.component.scss',
	standalone: false,
})
export class HasteComponent extends SiteComponent {


	constructor() {
		super()
	}

	override ngOnInit() {

	}

}
