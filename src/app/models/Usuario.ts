export class Usuario {
  public nombre: string;
  public email: string;
  public uid: string;

  constructor(nombre: string, email: string, uid: string) {
    this.uid    = uid;
    this.nombre = nombre;
    this.email  = email;
  }
}
