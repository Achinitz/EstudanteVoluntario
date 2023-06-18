export class Termoadesao {
  constructor(
    public _id?: string,
    public aceiteTermo?: string,
    public rescisaoTermo?: string,
    public idEstudante?: {
      _id?: string;
      userid?: {
        _id?: string;
        login?: string;
      };
      nomeCompleto?: string;
      nomeSocial?: string;
      estadoCivil?: string;
      rg?: string;
      rgEmissor?: string;
      telefone?: string;
      email?: string;
      endereco?: {
        cep?: string;
        logradouro?: string;
        numero?: string;
        bairro?: string;
        estado?: string;
        cidade?: string;
        complemento?: string;
      };
    },
    public idEntidade?: {
      _id?: string;
      userid?: {
        _id?: string;
        login?: string;
      };
      razaoSocial?: string;
      nomeFantasia?: string;
      email?: string;
      telefone?: string;
      endereco?: {
        cep?: string;
        logradouro?: string;
        numero?: string;
        bairro?: string;
        estado?: string;
        cidade?: string;
        complemento?: string;
      };
    },
    public idVaga?: {
      _id?: string;
      nomeVaga?: string;
      descricao?: string;
      requisitos?: string;
      auxilio?: string;
      dataInicioTrabalho?: string;
      dataEncerramentoTrabalho?: string;
      horarioInicioTrabalho?: string;
      horarioEncerramentoTrabalho?: string;
      termo: boolean
    },
    public idInscricao?: {
      _id?: string;
    }
  ) {}
}
