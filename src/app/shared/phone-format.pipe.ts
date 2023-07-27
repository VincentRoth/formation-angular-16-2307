import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string, separator: string = ' '): unknown {
    if (!value) {
      return value;
    }
    return value.replaceAll('.', separator);
  }
}
