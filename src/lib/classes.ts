export type Lesson = {
  n: number;
  moduleId: string;
  slug: string;
  title: string;
  outcome: string;
  tools: string[];
};

export const lessons: Lesson[] = [
  {
    n: 1,
    moduleId: 'm1',
    slug: '01-orientacion',
    title: 'Introducción + mentalidad de producto + qué es IA',
    outcome: 'Tenés claro qué es producto vs idea, qué hace un LLM (y qué no), y el roadmap del curso.',
    tools: ['Chrome', 'Docs', 'Google Labs'],
  },
  {
    n: 2,
    moduleId: 'm2',
    slug: '02-playgrounds',
    title: 'Exploración de herramientas del flujo (Mixboard, Stitch, v0, Opal)',
    outcome: 'Probás un set de herramientas para ir de idea → pantallas → copy → prototipo, y elegís tu toolstack corto.',
    tools: ['Mixboard', 'Stitch', 'v0', 'Opal', 'Google Labs'],
  },
  {
    n: 3,
    moduleId: 'm2',
    slug: '03-ux-flujo-mvp',
    title: 'Diseño de flujo y UX del MVP',
    outcome: 'Definís el flujo principal, pantallas y scope (qué entra / qué no entra).',
    tools: ['Wireframes', 'Checklist'],
  },
  {
    n: 4,
    moduleId: 'm2',
    slug: '04-branding',
    title: 'Branding e identidad del producto (sin look IA)',
    outcome: 'Naming, tono, estilo visual y coherencia marca→producto.',
    tools: ['Google Fonts', 'Paleta', 'Copy'],
  },
  {
    n: 5,
    moduleId: 'm3',
    slug: '05-html-css',
    title: 'HTML + CSS desde cero (lo mínimo pero bien)',
    outcome: 'Landing responsive con jerarquía, tipografías y accesibilidad básica.',
    tools: ['HTML', 'CSS', 'Lighthouse'],
  },
  {
    n: 6,
    moduleId: 'm3',
    slug: '06-js-dom',
    title: 'JavaScript práctico: DOM + eventos + estado simple',
    outcome: 'Interacciones reales con estados (loading/success/error).',
    tools: ['JavaScript', 'DOM'],
  },
  {
    n: 7,
    moduleId: 'm3',
    slug: '07-iteracion',
    title: 'Iteración, testing y mejora',
    outcome: 'Detectás fricciones, simplificás UX y mejorás claridad (con criterio).',
    tools: ['Heurísticas UX', 'Checklists'],
  },
  {
    n: 8,
    moduleId: 'm3',
    slug: '08-git-deploy',
    title: 'Publicación: Git, deploy y producto online',
    outcome: 'Proyecto online con versionado prolijo y deploy estático.',
    tools: ['Git', 'GitHub', 'Deploy'],
  },
  {
    n: 9,
    moduleId: 'm4',
    slug: '09-cuando-ia',
    title: 'Cuándo tiene sentido usar IA en un producto',
    outcome: 'Identificás oportunidades reales: IA como feature (no humo).',
    tools: ['Casos', 'Patrones'],
  },
  {
    n: 10,
    moduleId: 'm4',
    slug: '10-feature-inteligente',
    title: 'Diseño de feature inteligente',
    outcome: 'Spec de feature IA: qué automatizar/generar/asistir y por qué.',
    tools: ['Spec', 'Métricas'],
  },
  {
    n: 11,
    moduleId: 'm4',
    slug: '11-ux-ia',
    title: 'UX de IA (inputs, outputs, confianza)',
    outcome: 'Diseñás UI de IA que genera confianza (y evita accidentes).',
    tools: ['UX IA', 'Guardrails'],
  },
  {
    n: 12,
    moduleId: 'm4',
    slug: '12-apis-front',
    title: 'Cómo funcionan las APIs desde frontend',
    outcome: 'Fetch + JSON + errores/rate limits + estados de UI.',
    tools: ['fetch', 'JSON'],
  },
  {
    n: 13,
    moduleId: 'm5',
    slug: '13-gemini',
    title: 'Integración de Gemini en el producto (JS)',
    outcome: 'Integración end-to-end (idealmente con proxy Node/Express).',
    tools: ['Gemini', 'Node/Express (opcional)'],
  },
  {
    n: 14,
    moduleId: 'm5',
    slug: '14-robustez',
    title: 'Robustez: errores, límites y control',
    outcome: 'Manejo de fallos, estados de carga, consistencia y control de uso.',
    tools: ['Retries', 'Limits'],
  },
  {
    n: 15,
    moduleId: 'm5',
    slug: '15-entrega-ia',
    title: 'Entrega 2: producto con IA integrada',
    outcome: 'Demo funcional + feedback + iteración.',
    tools: ['Demo', 'Feedback'],
  },
  {
    n: 16,
    moduleId: 'm5',
    slug: '16-demo-day',
    title: 'Demo day y próximos pasos',
    outcome: 'Presentación final + roadmap + cómo seguir mejorando.',
    tools: ['Pitch', 'Roadmap'],
  },
];
