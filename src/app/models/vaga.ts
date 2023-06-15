import { StatusVaga } from '../enums/status-vaga';
import { Inscricao } from './inscricao';

export class Vaga {
  constructor(
    public _id?: string,
    public entidadeId?: {
      _id?: string;
      nome: string;
    },
    public nomeVaga?: string,
    public img?: string,
    public descricao?: string,
    public auxilio?: string,
    public requisitos?: string,
    public endereco?: {
      logradouro?: string;
      numero?: string;
      bairro?: string;
      complemento?: string;
      estado?: string;
      cidade?: string;
      cep?: string;
    },

    public dataAberturaVaga?: Date,
    public dataFinalizacaoVaga?: string,
    public dataInicioTrabalho?: string,
    public dataEncerramentoTrabalho?: string,
    public horarioInicioTrabalho?: string,
    public horarioEncerramentoTrabalho?: string,
    public numeroVagas?: number,
    public statusVaga?: StatusVaga,
    public inscricoes?: Array<Inscricao>,
    public dataAprovacaoVaga?: Date,
    public idAdmin?: string,
    public inscrito?: boolean,
  ) {}
}
