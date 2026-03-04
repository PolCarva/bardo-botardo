export type Module = {
  id: string;
  title: string;
  subtitle: string;
  lessons: number[];
};

export const modules: Module[] = [
  {
    id: 'm1',
    title: 'Fundamentos: producto + IA sin humo',
    subtitle: 'Entender qué construir, para quién, y qué hace (y no hace) la IA.',
    lessons: [1],
  },
  {
    id: 'm2',
    title: 'Exploración del flujo + herramientas (toolstack)',
    subtitle: 'Playgrounds y herramientas para velocidad: Mixboard, Stitch, v0 y Opal. Después definimos flujo + UX + branding.',
    lessons: [2, 3, 4],
  },
  {
    id: 'm3',
    title: 'Construcción base (HTML/CSS/JS)',
    subtitle: 'De cero a web online: interacción, estado, iteración y deploy.',
    lessons: [5, 6, 7, 8],
  },
  {
    id: 'm4',
    title: 'IA como feature (diseño y UX)',
    subtitle: 'Cuándo usarla, cómo diseñarla y cómo integrarla sin humo.',
    lessons: [9, 10, 11, 12],
  },
  {
    id: 'm5',
    title: 'Gemini + robustez + Demo Day',
    subtitle: 'Integración real, control de errores y presentación final.',
    lessons: [13, 14, 15, 16],
  },
];
