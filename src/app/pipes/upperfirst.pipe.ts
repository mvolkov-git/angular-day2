import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperfirst',
})
export class UpperfirstPipe implements PipeTransform {
  transform(value: string, all: boolean = false): string {
    if (all) {
      let words: string[] = value.split(' ');
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].substring(0, 1).toUpperCase() +
              words[i].substring(1, words[i].length);
      }
      return words.join(' ');
    } else {
      return (
        value.substring(0, 1).toUpperCase() + value.substring(1, value.length)
      );
    }

    //for (let)
    //
    // return 'null';[0] = wor
  }
}
