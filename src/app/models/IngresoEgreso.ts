
export class IngresoEgreso {
  public monto: number;
  public tipo: string;
  public description: string;
  public uid?: string;

  constructor(objecto) {
    this.description    = objecto && objecto.description  || null;
    this.monto          = objecto && objecto.monto        || null;
    this.tipo           = objecto && objecto.tipo         || null;
    // this.uid            = objecto && objecto.uid          || null;
  }
}
