import { StatusInscricao } from '../enums/status-inscricao';

export class Inscricao {
  constructor(
    public _id?: string,
    public vagaId?: {
      nomeVaga?: string;
      descricao?: string;
      requisitos?: string;
      numeroVagas?: number;
      endereco?: {
        logradouro?: string;
        numero?: string;
        bairro?: string;
        complemento?: string;
        estado?: string;
        cidade?: string;
        cep?: string;
      };
      dataInicioTrabalho?: string;
      dataEncerramentoTrabalho?: string;
      horarioInicioTrabalho?: string;
      horarioEncerramentoTrabalho?: string;
      dataFinalizacaoVaga?: string;
    },
    public estudanteId?: {
      _id?: string,
      nomeCompleto?: string,
      nomeSocial?: string,
      curso?: {
        nomeCurso?:string
      }
    },
    public dataInscricao?: Date,
    public statusInscricao?: StatusInscricao,
    public termoAdesao?: boolean
  ) {}
}
