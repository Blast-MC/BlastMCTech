import {Component} from '@angular/core';
import {SiteComponent} from '../../lifecycle/SiteComponent';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'app-files',
	templateUrl: './files.component.html',
	styleUrl: './files.component.scss',
	standalone: false,
})
export class FilesComponent extends SiteComponent {

  direct: boolean = false;
  id: string;
  fileUrl: string;
  fileExtension: string;

	constructor(
      public route: ActivatedRoute
  ) {
		super()
	}

	override ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.fileExtension = params.get('extension') || 'png';
      if (this.id)
        this.fileUrl = "https://i.blastmc.tech/" + this.id + "." + this.fileExtension;
    });
	}

  protected readonly encodeURIComponent = encodeURIComponent;
}
