import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string, separator: string = ' '): unknown {
    return value?.replaceAll('.', separator);
  }
}
