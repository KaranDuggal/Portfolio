import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitToDots'
})
export class LimitToDotsPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    return `${value.substring(0, args[0] ?? 50)}...`;
  }

}
