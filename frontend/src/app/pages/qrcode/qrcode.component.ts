import {Component, ElementRef, ViewChild} from '@angular/core';
import { SiteComponent } from '../../lifecycle/SiteComponent';
import QRCodeStyling, {Options} from 'qr-code-styling';

@Component({
	selector: 'app-qrcode',
	templateUrl: './qrcode.component.html',
	styleUrl: './qrcode.component.scss',
	standalone: false,
})
export class QRCodeComponent extends SiteComponent {
  @ViewChild('qrCanvas', { static: true }) qrCanvas!: ElementRef;

  url: string = '';
  dotStyle: string = 'rounded';
  cornerStyle: string = 'extra-rounded';
  logoUrl: string | null = null;
  dotColor: string = 'rgba(0,0,0,1)';
  backgroundColor: string = 'rgba(255,255,255,1)';

  styles: any = ['square', 'rounded', 'extra-rounded', 'dots', 'classy', 'classy-rounded'];


  qrCode!: QRCodeStyling;

  constructor() {
    super();
  }

  override ngOnInit() {
    this.generateQRCode();
  }

  generateQRCode() {
    const options: Options = {
      width: 300,
      height: 300,
      data: this.url,
      image: this.logoUrl ?? undefined,
      dotsOptions: {
        color: this.dotColor,
        type: this.dotStyle as any
      },
      backgroundOptions: {
        color: this.backgroundColor
      }
    };
    if (this.cornerStyle != 'none')
      options.cornersSquareOptions = {
        type: this.cornerStyle as any
      }

    this.qrCode = new QRCodeStyling(options);
    this.qrCode.append(this.qrCanvas.nativeElement);
  }

  setDotStyle(style: string) {
    this.dotStyle = style;
    this.updateQRCode();
  }

  setCornerStyle(style: string) {
    this.cornerStyle = style;
    this.updateQRCode();
  }

  updateQRCode() {
    this.qrCode.update({
      data: this.url,
      image: this.logoUrl ?? undefined,
      dotsOptions: {
        color: this.dotColor,
        type: this.dotStyle as any
      },
      backgroundOptions: {
        color: this.backgroundColor
      },
      cornersSquareOptions: {
        type: this.cornerStyle as any
      }
    });
  }

  onLogoUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.logoUrl = reader.result as string;
        this.updateQRCode();
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  downloadQRCode() {
    this.qrCode.download({ name: 'qr-code', extension: 'png' });
  }

}
