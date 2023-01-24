import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {

  transform(value: string): string {
    if(!value && value.length === 14){
      return value;
  }

  return `
  ${value.slice(0,2)}.${value.slice(2,5)}.${value.slice(5,8)}/${value.slice(8,12)}-${value.slice(-2)}
  `;       

  }

}
