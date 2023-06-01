export class Curso {
    constructor(
        public instituicao?: string, //verificar se vai aqui mesmo 
        public grau?: boolean, //isso aqui não vira outra tabela? ou um enum?
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
