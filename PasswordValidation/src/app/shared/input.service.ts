import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InputService {
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
