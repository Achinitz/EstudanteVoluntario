export class Notificacao {
  constructor(
    public _id: string,
    public idRemetente?: {
      id?: string,
      nome?: string
    },
    public idDestinatario?: string,
    public titulo?: string,
    public mensagem?: string,
    public data?: string
  ) {}
}
