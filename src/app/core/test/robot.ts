export class Robot {
  usuario: string;
  bateria: number;
  funcionalidades: string[];
  constructor(
    usuario: string
  ) {
    this.usuario = usuario;
    this.bateria = 100;
    this.funcionalidades = [];
  }



}
