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
    title: 'Exploración de herramientas del flujo (Mixboard, Stitch, v0, Opal, Google Labs)',
    outcome: 'Probás un set de herramientas para ir de idea → moodboard → diseño → MVP rápido, y elegís tu toolstack corto.',
    tools: ['Mixboard', 'Stitch', 'v0', 'Opal', 'Google Labs'],
  },
  {
    n: 3,
    moduleId: 'm2',
    slug: '03-ux-flujo-mvp',
    title: 'Estética primero, flujo, croquis y diagramar antes de la IA',
    outcome: 'Definís la estética de la marca, el flujo del producto, hacés croquis con eso en mente y diagramás antes de pedirle a la IA que genere.',
    tools: ['Estética', 'Flujo', 'Croquis', 'Diagrama', 'Checklist'],
  },
  {
    n: 4,
    moduleId: 'm2',
    slug: '04-antigravity',
    title: 'Antigravity: el IDE agéntico de Google',
    outcome: 'Sabés qué es Antigravity, cómo funciona, qué modelos usa, cómo dar contexto y menciones (@), y qué modos tiene (Planning / Fast).',
    tools: ['Antigravity', 'Gemini 3', 'Contexto', 'Menciones', 'Modos'],
  },
  {
    n: 5,
    moduleId: 'm2',
    slug: '05-mcp-skills',
    title: 'MCP de Stitch y Skills: diseño en Stitch → código en tu repo',
    outcome: 'Instalás el MCP de Stitch en Antigravity para copiar un proyecto o pantalla y pasarlo a la realidad; además una Skill desde skills.sh.',
    tools: ['Stitch MCP', 'Skills', 'skills.sh', 'Antigravity'],
  },
  {
    n: 6,
    moduleId: 'm3',
    slug: '06-git-vercel',
    title: 'Git, GitHub, GitHub Desktop y publicar en Vercel',
    outcome: 'Versionás tu proyecto con Git, lo subís a un repo en GitHub (con GitHub Desktop o terminal) y lo publicás en Vercel.',
    tools: ['Git', 'GitHub', 'GitHub Desktop', 'Vercel'],
  },
  {
    n: 7,
    moduleId: 'm3',
    slug: '07-js-dom',
    title: 'Taller 1 — Traé dudas, code, diseño',
    outcome: 'Espacio de taller: codear, diseñar y resolver lo que necesites (JS, interacción, integración, lo que venga).',
    tools: ['JavaScript', 'DOM', 'Taller'],
  },
  {
    n: 8,
    moduleId: 'm3',
    slug: '08-iteracion',
    title: 'Taller 2 — Traé dudas, code, diseño',
    outcome: 'Espacio de taller: codear, diseñar y resolver lo que necesites (iteración, testing, deploy, lo que venga).',
    tools: ['Heurísticas UX', 'Checklists', 'Taller'],
  },
  {
    n: 9,
    moduleId: 'm4',
    slug: '09-api-gemini-primera-peticion',
    title: 'Qué es una API, API key de Gemini y primera petición',
    outcome: 'Entendés qué es una API, cómo obtener tu API key de Gemini y cómo hacer la primera petición (request/response).',
    tools: ['API', 'API key', 'Gemini', 'Primera petición'],
  },
  {
    n: 10,
    moduleId: 'm4',
    slug: '10-gemini-uso-real',
    title: 'Gemini en uso real: parámetros y respuesta estructurada',
    outcome: 'Sabés qué es cada parámetro (temperature, maxTokens, stream, etc.), cómo pedir respuesta estructurada (JSON) y cómo integrarlo en código.',
    tools: ['GenerationConfig', 'stream', 'JSON', 'Parámetros'],
  },
  {
    n: 11,
    moduleId: 'm5',
    slug: '11-avance',
    title: 'Taller avance obligatorios',
    outcome: 'Espacio para avanzar en los obligatorios del curso con dudas, código y apoyo.',
    tools: ['Taller'],
  },
  {
    n: 12,
    moduleId: 'm5',
    slug: '12-avance',
    title: 'Taller avance obligatorios',
    outcome: 'Espacio para avanzar en los obligatorios del curso con dudas, código y apoyo.',
    tools: ['Taller'],
  },
  {
    n: 13,
    moduleId: 'm5',
    slug: '13-avance',
    title: 'Taller avance obligatorios',
    outcome: 'Espacio para avanzar en los obligatorios del curso con dudas, código y apoyo.',
    tools: ['Taller'],
  },
  {
    n: 14,
    moduleId: 'm5',
    slug: '14-avance',
    title: 'Taller avance obligatorios',
    outcome: 'Espacio para avanzar en los obligatorios del curso con dudas, código y apoyo.',
    tools: ['Taller'],
  },
  {
    n: 15,
    moduleId: 'm5',
    slug: '15-avance',
    title: 'Taller avance obligatorios',
    outcome: 'Espacio para avanzar en los obligatorios del curso con dudas, código y apoyo.',
    tools: ['Taller'],
  },
  {
    n: 16,
    moduleId: 'm5',
    slug: '16-muestra',
    title: 'Muestra',
    outcome: 'Presentación y demo de los productos con IA integrada; feedback y próximos pasos.',
    tools: ['Demo', 'Feedback', 'Roadmap'],
  },
];
