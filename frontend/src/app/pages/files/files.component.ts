import {Component} from '@angular/core';
import {SiteComponent} from '../../lifecycle/SiteComponent';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpEvent, HttpEventType} from '@angular/common/http';

@Component({
	selector: 'app-files',
	templateUrl: './files.component.html',
	styleUrl: './files.component.scss',
	standalone: false,
})
export class FilesComponent extends SiteComponent {

  direct: boolean = false;
  id: string;
  fileExtension: string;
  fileUrl: string;

  selectedFile: File | null = null;
  useOriginalName: boolean = false;

  uploading: boolean = false;
  uploadProgress: number = 0;

  error: boolean = false;
  success: boolean = false;

	constructor(
      public route: ActivatedRoute,
      public http: HttpClient,
  ) {
		super()
	}

	override ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (!params.has('id')) return;
      this.direct = true;
      this.id = params.get('id');
      this.fileExtension = params.get('extension') || 'png';
      this.fileUrl = "https://i.blastmc.tech/" + this.id + "." + this.fileExtension;
    });
	}

  protected readonly encodeURIComponent = encodeURIComponent;

  onPageRendered(event: any) {
    const canvas = document.querySelector('.page canvas') as HTMLCanvasElement;

    if (canvas) {
      const width = canvas.width;
      const height = canvas.height;

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

  upload(event: Event) {
    event.preventDefault();
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('useOriginalName', 'false');

    this.uploading = true;
    this.uploadProgress = 0;

    this.http.post('/api/upload', formData, {
      reportProgress: true,
      observe: 'events',
      responseType: 'text'
    }).subscribe({
      next: (event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress && event.total) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        } else if (event.type === HttpEventType.Response) {
          if (event.status == 200) {
            this.uploadProgress = 100;
            this.success = true;
            setTimeout(() => {
              this.id = event.body.split('/').pop()?.split('.')[0] || '';
              this.fileExtension = this.selectedFile.name.split('.').pop() || 'png';
              this.fileUrl = "https://i.blastmc.tech/" + this.id + "." + this.fileExtension;
              this.selectedFile = null;
              this.useOriginalName = false;
            }, 1000);
          }
          else {
            setTimeout(() => {
              this.uploading = false
            }, 500);
          }
        }
      },
      error: (err) => {
        console.error('Upload failed', err);
        this.error = true;
        this.uploadProgress = 100;
        setTimeout(() => {
          this.error = false;
          this.uploading = false;
        }, 5000);
      }
    });
  }

  clear() {
    this.direct = false;
    this.id = null;
    this.fileExtension = null;
    this.fileUrl = null;
    this.selectedFile = null;
    this.useOriginalName = false;
    this.uploading = false;
    this.uploadProgress = 0;
    this.error = false;
    this.success = false;
  }


}
