import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exclamation',
})
export class ExclamationPipe implements PipeTransform {
  transform(
    value: string,
    howMany: number = 4,
    isUpperCase: boolean = false
  ): string {
    // return value + '!';

    let simanin = '';
    for (let i = 0; i < howMany; i++) {
      simanin += '!';
    }
    if (isUpperCase) {
      return `${value}${simanin}`.toUpperCase();
    }

    return value + simanin;
  }
}
