import {Component} from '@angular/core';
import {SiteComponent} from '../../lifecycle/SiteComponent';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

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

  selectedFile: File | null = null;
  useOriginalName: boolean = false;

	constructor(
      public route: ActivatedRoute,
      public http: HttpClient,
  ) {
		super()
	}

	override ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.fileExtension = params.get('extension') || 'png';
      if (this.id) {
        this.direct = true;
        this.fileUrl = "https://i.blastmc.tech/" + this.id + "." + this.fileExtension;
      }
    });
	}

  protected readonly encodeURIComponent = encodeURIComponent;

  onPageRendered(event: any) {
    const canvas = document.querySelector('.page canvas') as HTMLCanvasElement;

    if (canvas) {
      const width = canvas.width;
      const height = canvas.height;

      // Apply directly to the container or host component
      const container = document.querySelector('pdf-viewer') as HTMLElement;

      if (container) {
        container.style.width = `${width + 10}px`;
        container.style.height = `${height + 10}px`;
      }
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  upload() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('useOriginalName', String(this.useOriginalName));

    this.http.post('/api/upload', formData, { responseType: 'text' })
      .subscribe({
        next: url => {
          this.id = url.split('/').pop()?.split('.')[0] || '';
          this.fileExtension = this.selectedFile.name.split('.').pop() || 'png';
          this.fileUrl = "https://i.blastmc.tech/" + this.id + "." + this.fileExtension;
          this.selectedFile = null;
          this.useOriginalName = false;
        },
        error: err => console.error('Upload error:', err)
      });
  }
}
