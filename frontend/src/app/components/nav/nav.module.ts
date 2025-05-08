import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavComponent } from './nav.component';
import {NgClickOutsideDirective} from 'ng-click-outside2';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    NgClickOutsideDirective
  ],
  exports: [NavComponent]
})
export class NavModule {}
