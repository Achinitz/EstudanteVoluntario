import { Usuario } from "./usuario.model";

export class Estudante extends Usuario{

    constructor(
        public nomeCompleto?: string,
        public nomeSocial?: string,
        public confirmaNomeSocial?: boolean,
        public identificacaoGenero?: string,
        public estadoCivil?: string,
        public dataNascimento?: Date,
        public rg?: string,
        public rgEmissor?: string,
        public email?: string,
        public telefone?: string,
        public cep?: string,
        public logradouro?: string,
        public numero?: string,
        public bairro?: string,
        public estado?: string,
        public cidade?: string,
        public complemento?: string,
        public areasInteresse?: string,
        public experiencias?: string,
        public instituicao?: string,
        public grau?: string,
        public curso?: string,
        public anoInicio?: Date,
        public anoConclusao?: Date,
        public comprovanteMatricula?: string,
        public dataAprovacao?: Date,
        public idAdmin?: string,

        // public id?:number,
        // public nome?: string,
        // public login?: string,
        // public senha?: string,
        // public perfil?: string,
        // public imgPerfil?: any,
        // public dataCadastro?: Date,
        // public perfilAtivo?: boolean
    ){
        // super(id,nome,login,senha,perfil, imgPerfil, dataCadastro, perfilAtivo);
        super();
    }
}
