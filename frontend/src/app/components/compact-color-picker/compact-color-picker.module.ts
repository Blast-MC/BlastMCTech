import {NgModule} from '@angular/core';
import {CompactColorPickerComponent} from './compact-color-picker.component';
import {ColorSketchModule} from 'ngx-color/sketch';
import {NgClickOutsideDirective} from 'ng-click-outside2';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [CompactColorPickerComponent],
  imports: [
    CommonModule,
    ColorSketchModule,
    NgClickOutsideDirective
  ],
  exports: [CompactColorPickerComponent]
})
export class CompactColorPickerModule {}
