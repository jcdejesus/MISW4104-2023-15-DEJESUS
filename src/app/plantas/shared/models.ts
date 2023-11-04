enum Tipo {
  Interior = 'Interior',
  Exterior = 'Exterior',
}

export class Planta {
  constructor(
    public id: string,
    public nombre_comun: string,
    public nombre_cientifico: string,
    public tipo: Tipo,
    public altura_maxima: number,
    public clima: string,
    public sustrato_siembra: string
  ) {}
}
