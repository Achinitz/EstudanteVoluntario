import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'localHour'
})
export class LocalHourPipe implements PipeTransform {

  transform(value: string): string {
    return dayjs(value).format('HH:MM'); 
  }

}
