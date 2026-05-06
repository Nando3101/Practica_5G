export interface ICliente {
  id?: number;
  cedula?: string;
  nombre?: string;
  apellido?: string;
  edad?: number;
}

export class Cliente implements ICliente {
  constructor(
    public id?: number,
    public cedula?: string,
    public nombre?: string,
    public apellido?: string,
    public edad?: number,
  ) {}
}
