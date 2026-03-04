export type Module = {
  id: string;
  title: string;
  subtitle: string;
  lessons: number[];
};

export const modules: Module[] = [
  {
    id: 'm1',
    title: 'Fundamentos: producto + IA',
    subtitle: 'Entender qué construir, para quién, y qué hace (y no hace) la IA.',
    lessons: [1],
  },
  {
    id: 'm2',
    title: 'Exploración del flujo + herramientas (toolstack)',
    subtitle: 'Playgrounds, estética y flujo; después Antigravity y MCP/Skills para codear con contexto.',
    lessons: [2, 3, 4, 5],
  },
  {
    id: 'm3',
    title: 'Construcción base (HTML/CSS/JS)',
    subtitle: 'De cero a web online: interacción, talleres y deploy (Git, Vercel).',
    lessons: [6, 7, 8],
  },
  {
    id: 'm4',
    title: 'IA en el proyecto: API de Gemini',
    subtitle: 'Qué es una API, API key, primera petición; después uso real (parámetros, respuesta estructurada).',
    lessons: [9, 10],
  },
  {
    id: 'm5',
    title: 'Talleres de avance + Muestra',
    subtitle: 'Clases 11–15: taller para avanzar en obligatorios. Clase 16: muestra.',
    lessons: [11, 12, 13, 14, 15, 16],
  },
];
