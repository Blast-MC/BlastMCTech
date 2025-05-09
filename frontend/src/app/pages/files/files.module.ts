import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files.component';
import { FilesRoutingModule } from './files-routing.module';
import {SafeUrlPipe} from '../../pipes/safe-url.pipe';

@NgModule({
	declarations: [FilesComponent],
  imports: [
    CommonModule,
    FilesRoutingModule,
    SafeUrlPipe
  ]
})
export class FilesModule {
}
