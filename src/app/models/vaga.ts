import { StatusVaga } from "../enums/status-vaga";
import { Inscricao } from "./inscricao";

export class Vaga {
    constructor(
        public id?: string, //verificar se vai aqui mesmo 
        public nomeEntidade?: string, //verificar se vai aqui mesmo 
        public nomeVaga?: string, //isso aqui não vira outra tabela? ou um enum?
        public img?: string,
        public descricao?: string,
        public auxilio?: string,
        public requisitos?: string,
        public logradouro?: string,
        public numero?: string,
        public bairro?: string,
        public complemento?: string,
        public estado?: string,
        public cidade?: string,
        public dataAberturaVaga?: Date,
        public dataFinazalicaoVaga?: Date,
        public dataInicioTrabalho?: Date,
        public dataFimTrabalho?: Date,
        public horarioInicioTrabalho?: Date,
        public horarioEncerramentoTrabalho?: Date,
        public numeroVagas?: number,
        public statusVaga?: StatusVaga,
        public inscricoes?: Array<Inscricao>,
        public dataAprovacaoVaga?: Date,
        public idAdmin?: number
    ){        
    }
}
