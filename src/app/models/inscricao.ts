import { Vaga } from "./vaga";

export class Inscricao {
    constructor(
        public estudante?: string, //verificar se vai aqui mesmo 
        public entidade?: boolean, //isso aqui não vira outra tabela? ou um enum?
        public vaga?: Vaga,
        public dataInscricao?: Date,
        public status?: string,
        public caragaHoraria?: number,
        public avaliacao?: boolean,
        public termoAdesao?: boolean,
        public dataInicioTrabalho?: Date,
        public dataFinalTrabalho?: Date,
        public horasDiarias?: Date,
        public horasTotais?: Date,
    ){        
    }
}
