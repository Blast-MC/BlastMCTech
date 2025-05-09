import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NavModule} from './components/nav/nav.module';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {ColorSketchModule } from 'ngx-color/sketch';
import {NgClickOutsideDirective} from 'ng-click-outside2';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
	declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NavModule,
    CommonModule,
    RouterOutlet,
    ColorSketchModule,
    NgClickOutsideDirective,
    PdfViewerModule
  ],
	bootstrap: [AppComponent]
})
export class AppModule {}
