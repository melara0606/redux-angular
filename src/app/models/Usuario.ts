interface ObjectUser {
  nombre: string;
  uid: string;
  email: string;
}

export class Usuario {
  public nombre: string;
  public email: string;
  public uid: string;

  constructor(object: ObjectUser) {
    this.uid    = object.uid;
    this.nombre = object.nombre;
    this.email  = object.email;
  }
}
