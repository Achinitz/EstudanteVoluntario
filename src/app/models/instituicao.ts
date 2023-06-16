export class Instituicao {
    constructor(
        public _id?: string,
        public cnpj?: string,
        public nome?: boolean,
        public sigla?: string,
        public endereco?: {
            cep?: string;
            logradouro?: string;
            numero?: string;
            bairro?: string;
            estado?: string;
            cidade?: string;
            complemento?: string;
          },
        public email?: string,
        public telefone?: string,   
    ){        
    }
}
