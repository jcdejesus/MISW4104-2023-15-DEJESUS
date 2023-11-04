import { Planta, Tipo } from './models';

export const plantasFakeData: Planta[] = [
  {
    id: 1,
    nombre_comun: 'Cactus',
    nombre_cientifico: 'Lorep Ipsum',
    tipo: Tipo.Exterior,
    altura_maxima: 30,
    clima: 'Templado',
    sustrato_siembra: 'Tierra orgánica sin agua',
  },
  {
    id: 2,
    nombre_comun: 'Potus',
    nombre_cientifico: 'Epipremnum aureum',
    tipo: Tipo.Exterior,
    altura_maxima: 1000,
    clima: 'Todos',
    sustrato_siembra: 'Sustrato para huerto',
  },
  {
    id: 3,
    nombre_comun: 'Cerimán',
    nombre_cientifico: 'Araceae',
    tipo: Tipo.Interior,
    altura_maxima: 10,
    clima: 'Frio',
    sustrato_siembra: 'Tierra orgánica sin limpiar',
  },
];
