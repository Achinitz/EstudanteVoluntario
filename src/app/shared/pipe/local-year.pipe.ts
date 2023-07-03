import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'localYear'
})
export class LocalYearPipe implements PipeTransform {

  transform(value: string): string {
    return dayjs(value).format('MM/YYYY'); 
  }

}
