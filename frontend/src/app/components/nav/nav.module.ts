import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavComponent } from './nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
  ],
  exports: [NavComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NavModule {}
