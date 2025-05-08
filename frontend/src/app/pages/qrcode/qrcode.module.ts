import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeComponent } from './qrcode.component';
import { QRCodeRoutingModule } from './qrcode-routing.module';
import {FormsModule} from '@angular/forms';
import {ColorSketchModule } from 'ngx-color/sketch';
import {CompactColorPickerModule} from '../../components/compact-color-picker/compact-color-picker.module';

@NgModule({
	declarations: [QRCodeComponent],
  imports: [
    CommonModule,
    QRCodeRoutingModule,
    FormsModule,
    ColorSketchModule,
    CompactColorPickerModule
  ],
  bootstrap: [QRCodeComponent]
})
export class QRCodeModule {
}
