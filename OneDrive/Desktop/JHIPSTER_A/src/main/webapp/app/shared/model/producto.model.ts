export interface IProducto {
  id?: number;
  codigo?: string;
  nombre?: string;
  descripcion?: string;
  precio?: number;
  fechaCreacion?: Date;
}

export class Producto implements IProducto {
  constructor(
    public id?: number,
    public codigo?: string,
    public nombre?: string,
    public descripcion?: string,
    public precio?: number,
    public fechaCreacion?: Date,
  ) {}
}
