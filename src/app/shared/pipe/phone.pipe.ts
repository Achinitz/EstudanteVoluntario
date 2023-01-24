import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(rawNum:string) {
    let espaco = ' ';
    rawNum = rawNum.replace(' ','').replace('-','');
    if(rawNum.length < 11){
      let areaCodeStr = rawNum.slice(0,2);
      let midSectionStr = rawNum.slice(2,6);
      let lastSectionStr = rawNum.slice(6,11);
      return `(${areaCodeStr})${espaco}${midSectionStr}-${lastSectionStr}`;
    }else{
      let areaCodeStr = rawNum.slice(0,2);
      let midSectionStr = rawNum.slice(2,7);
      let lastSectionStr = rawNum.slice(7,11);
      return `(${areaCodeStr})${espaco}${midSectionStr}-${lastSectionStr}`;
    }
  }
}
