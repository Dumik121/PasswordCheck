import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputService } from '../shared/input.service';

@Component({
  selector: 'app-inpun-vield',
  templateUrl: './inpun-vield.component.html',
  styleUrls: ['./inpun-vield.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InpunVieldComponent),
      multi: true,
    },
  ],
})
export class InpunVieldComponent implements ControlValueAccessor {
  addClass: string = '';
  password: string = '';

  onChange: (value: any) => void = () => {};
  onTouch: any = () => {};

  constructor(private inputService: InputService) {}

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement)?.value;
    this.onChange(inputValue);
    this.validate(inputValue);
  }

  validate(inputValue: string): void {
    if (inputValue === null || inputValue === undefined) {
      this.addClass = '';
      return;
    }
    const charLength = this.inputService.charCheck(inputValue);
    const passCheckMode = this.inputService.passCheck(inputValue);

    if (!charLength) {
      if (inputValue.length === 0) {
        this.addClass = '';
        return;
      }
      this.addClass = ' red';
      return;
    }

    if (passCheckMode === 1) {
      this.addClass = ' easyMode';
    }
    if (passCheckMode === 2) {
      this.addClass = ' mediumMode';
    }
    if (passCheckMode === 3) {
      this.addClass = ' strongMode';
    }
  }

  writeValue(value: any): void {
    this.password = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
