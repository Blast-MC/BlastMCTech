import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-copy-input',
  templateUrl: './copy-input.component.html',
  styleUrls: ['./copy-input.component.scss'],
  standalone: false,
})
export class CopyInputComponent implements AfterViewInit, OnChanges {
  @Input() value: string = '';
  @Input() label: string = 'URL:';

  @ViewChild('sizer') sizerRef!: ElementRef<HTMLElement>;

  inputWidth: number = 100;
  copied = false;

  ngAfterViewInit(): void {
    this.updateInputWidth();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      setTimeout(() => this.updateInputWidth(), 0);
    }
  }

  updateInputWidth() {
    if (this.sizerRef) {
      this.inputWidth = this.sizerRef.nativeElement.offsetWidth + 12 + 85; // add some padding
    }
  }

  copyToClipboard() {
    if (!this.value) return;
    navigator.clipboard.writeText(this.value).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}
