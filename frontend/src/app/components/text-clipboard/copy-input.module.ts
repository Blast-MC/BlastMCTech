import {NgModule} from '@angular/core';
import {CopyInputComponent} from './copy-input.component';
import {NgClass} from '@angular/common';


@NgModule({
  declarations: [CopyInputComponent],
  imports: [
    NgClass
  ],
  exports: [CopyInputComponent]
})
export class CopyInputModule {}
