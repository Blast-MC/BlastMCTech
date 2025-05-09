import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files.component';
import { FilesRoutingModule } from './files-routing.module';
import {SafeUrlPipe} from '../../pipes/safe-url.pipe';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
	declarations: [FilesComponent],
  imports: [
    CommonModule,
    FilesRoutingModule,
    SafeUrlPipe,
    PdfViewerModule
  ]
})
export class FilesModule {
}
