import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'compact-color-picker',
  templateUrl: './compact-color-picker.component.html',
  styleUrls: ['./compact-color-picker.component.scss'],
  standalone: false,
})
export class CompactColorPickerComponent {
  @Input() color: string = 'rgba(255,255,255,1)';
  @Output() colorChange = new EventEmitter<string>();

  showPicker = false;

  togglePicker() {
    this.showPicker = !this.showPicker;
  }

  closePicker() {
    this.showPicker = false;
  }

  onColorChange(event: any) {
    const c = event.color.rgb;
    this.color = `rgba(${c.r},${c.g},${c.b},${c.a})`;
    this.colorChange.emit(this.color);
  }
}
