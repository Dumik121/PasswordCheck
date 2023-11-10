import { Component } from '@angular/core';

@Component({
  selector: 'app-inpun-vield',
  templateUrl: './inpun-vield.component.html',
  styleUrls: ['./inpun-vield.component.scss'],
})
export class InpunVieldComponent {
  addClass: string = '';
  Validate(event: Event): void {
    const inputValue = (event.target as HTMLInputElement)?.value;
    const charLength = this.charCheck(inputValue);
    const passCheckMode = this.passCheck(inputValue);
    console.log(passCheckMode);
    if (!charLength) {
      if (inputValue.length == 0) {
        this.addClass = '';
        return;
      }
      this.addClass = ' red';
      return;
    }
    if (passCheckMode == 1) {
      this.addClass = ' easyMode';
      return;
    }
    if (passCheckMode == 2) {
      this.addClass = ' mediumMode';
      return;
    }
    if (passCheckMode == 3) {
      this.addClass = ' strongMode';
      return;
    }
  }

  charCheck(inputValue: string): boolean {
    return inputValue.length >= 8;
  }

  passCheck(inputValue: string): number {
    let charTypes = new Set();

    if (/[A-Za-z]/.test(inputValue)) {
      charTypes.add('letter');
    }
    if (/[0-9]/.test(inputValue)) {
      charTypes.add('number');
    }
    if (/[^0-9A-Za-z]/.test(inputValue)) {
      charTypes.add('symbol');
    }

    return charTypes.size;
  }
}
