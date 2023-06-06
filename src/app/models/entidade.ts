import { Usuario } from "./usuario.model";

export class Entidade extends Usuario{
    constructor(
        public razaoSocial?: string,
        public nomeFantasia?: string,
        public nomeResponsavelCadastro?: boolean,
        public email?: string,
        public telefone?: string,
        public cep?: string,
        public logradouro?: string,
        public numero?: string,
        public bairro?: string,
        public estado?: string,
        public cidade?: string,
        public complemento?: string,
        public termoDeUso?: Boolean,
        public missao?: string,
        public perfilVoluntario?: string,
        public dataAprovacao?: Date, 
    ){       
        super(); 
    }
}
