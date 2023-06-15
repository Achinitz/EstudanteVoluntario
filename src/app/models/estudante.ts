import { Usuario } from './usuario.model';

export class Estudante extends Usuario {
  constructor(
    public _id?: string,
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
    public endereco?: {
      cep?: string;
      logradouro?: string;
      numero?: string;
      bairro?: string;
      estado?: string;
      cidade?: string;
      complemento?: string;
    },
    public areasInteresse?: string,
    public experiencias?: string,
    public curso?: {
      nomeCurso?: string;
      instituicao?: string;
      grau?: string;
      anoInicio?: Date;
      anoConclusao?: Date;
    },
    public comprovanteMatricula?: string,
    public dataAprovacao?: Date,
    public idAdmin?: string
  ) 
  {
    // super(id,nome,login,senha,perfil, imgPerfil, dataCadastro, perfilAtivo);
    super();
  }
}
