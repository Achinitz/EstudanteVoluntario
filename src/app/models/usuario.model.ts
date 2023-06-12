export class Usuario {

    constructor(
        public _id?:string,
        public nome?: string,
        public login?: string,
        public senha?: string,
        public perfil?: string,
        public imgPerfil?: any,
        public dataCadastro?: Date,
        public statusPerfil?: string,
    ){   
    }
}
