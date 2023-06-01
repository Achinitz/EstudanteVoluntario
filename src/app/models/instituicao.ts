import { Curso } from "./curso";

export class Instituicao {
    constructor(
        public cnpj?: string,
        public nome?: boolean,
        public sigla?: string,
        public cep?: string,
        public logradouro?: Date,
        public email?: string,
        public telefone?: string,
        public cursos?: Array<Curso>
    ){        
    }
}
