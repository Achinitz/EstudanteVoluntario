import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomeUsuario'
})
export class NomeUsuarioPipe implements PipeTransform {

  transform(value: String ): String {

    return value.split(" ")[0];
  }

}
