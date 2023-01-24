import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cpfcnpj'
})
export class CpfCnpjPipe implements PipeTransform{
    transform(value: string, zenkaku: boolean = true): string {
        if(!value && value.length < 10){
            return value;
        }
        if(value.length < 12){
            return `
            ${value.slice(0,3)}.${value.slice(3,3)}.${value.slice(6,3)}-${value.slice(-1)}
            `;
        }else{
            return `
            ${value.slice(0,2)}.${value.slice(2,3)}.${value.slice(5,3)}/${value.slice(8,4)}-${value.slice(12)}
            `;            
        }
    }
}