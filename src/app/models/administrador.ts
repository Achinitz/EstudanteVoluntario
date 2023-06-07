import { Usuario } from "./usuario.model";

export class Administrador extends Usuario{
    constructor(
        public nomeCompleto?: string,
        public confirmaNomeSocial?: boolean,
        public nomeSocial?: string,
        public identificacaoGenero?: string,
        public dataNascimento?: Date,
        public email?: string,
        public telefone?: string
    ){       
        super();  
    }
}
