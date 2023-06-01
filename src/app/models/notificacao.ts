export class Notificacao {
    constructor(
        public titulo?: string, //verificar se vai aqui mesmo 
        public idRemetente?: boolean, //isso aqui não vira outra tabela? ou um enum?
        public nomeCurso?: string,
        public campus?: string,
        public cep?: string,
        public logradouro?: string,
        public numero?: string,
        public bairro?: string,
        public complemento?: string,
        public estado?: string,
        public cidade?: string,
    ){        
    }
}
