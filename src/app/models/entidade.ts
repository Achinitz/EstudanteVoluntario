import { Usuario } from './usuario.model';

export class Entidade extends Usuario {
  constructor(
    public _id?: string,
    public razaoSocial?: string,
    public nomeFantasia?: string,
    public nomeResponsavelCadastro?: boolean,
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
    public userid?: {
      _id?: string;
      login?: string;
      dataCadastro?: string;
      statusPerfil?: string;
    },
    public termoDeUso?: Boolean,
    public missao?: string,
    public perfilVoluntario?: string,
    public dataAprovacao?: Date,
    public idAdmin?: string,
    public comentario?: string
  ) {
    super();
  }
}
