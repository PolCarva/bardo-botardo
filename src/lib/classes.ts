export type Lesson = {
  n: number;
  slug: string;
  title: string;
  outcome: string;
  tools: string[];
};

export const lessons: Lesson[] = [
  {
    n: 1,
    slug: "01-orientacion",
    title: "Orientación: qué es ‘vibecoding’ y cómo vas a aprender",
    outcome: "Tenés el setup listo y entendés el roadmap 0→pro en 16 clases.",
    tools: ["VS Code", "Chrome DevTools", "GitHub"],
  },
  {
    n: 2,
    slug: "02-html-css",
    title: "HTML + CSS desde cero (lo mínimo pero bien)",
    outcome: "Armás una landing simple con layout, tipografías y accesibilidad básica.",
    tools: ["HTML", "CSS", "Lighthouse"],
  },
  {
    n: 3,
    slug: "03-javascript-basico",
    title: "JavaScript 101: variables, funciones, DOM y eventos",
    outcome: "Interacciones reales: botones, formularios, validación y estados.",
    tools: ["JavaScript", "DOM"],
  },
  {
    n: 4,
    slug: "04-git",
    title: "Git + GitHub: versionar como adulto",
    outcome: "Repo prolijo, ramas, PRs, issues, y deploy seguro.",
    tools: ["Git", "GitHub"],
  },
  {
    n: 5,
    slug: "05-astro",
    title: "Astro: construir sitios rápidos (y por qué importa)",
    outcome: "Sitio en Astro con rutas, layouts, componentes y contenido.",
    tools: ["Astro"],
  },
  {
    n: 6,
    slug: "06-tailwind-design",
    title: "Diseño rápido con Tailwind + sistema (sin que quede feo)",
    outcome: "Un mini design system: spacing, radios, colores, botones, cards.",
    tools: ["Tailwind"],
  },
  {
    n: 7,
    slug: "07-ux",
    title: "UX para devs: jerarquía, lectura, fricción y CTAs",
    outcome: "Tu landing convierte más sin ‘magia’: estructura, copy y pruebas.",
    tools: ["UX heuristics", "Analytics básico"],
  },
  {
    n: 8,
    slug: "08-stitch",
    title: "Google Stitch: del mock al código (y cómo integrarlo en tu flujo)",
    outcome: "Usás Stitch para acelerar UI y lo integrás al repo sin romper nada.",
    tools: ["Google Stitch"],
  },
  {
    n: 9,
    slug: "09-ai-en-web",
    title: "Webs con IA (de verdad): patrones de integración",
    outcome: "Sabés cuándo usar IA en front, en backend, o como feature del producto.",
    tools: ["Gemini API", "Vertex AI", "LLMs"],
  },
  {
    n: 10,
    slug: "10-api",
    title: "APIs 101: fetch, JSON, errores y rate limits",
    outcome: "Conectás tu web a una API real y manejás estados/errores.",
    tools: ["fetch", "REST"],
  },
  {
    n: 11,
    slug: "11-backend-simple",
    title: "Backend simple: endpoints para tu web (sin volverte loco)",
    outcome: "Tenés un endpoint para forms/IA y un flujo end-to-end.",
    tools: ["Serverless", "Node"],
  },
  {
    n: 12,
    slug: "12-auth-db",
    title: "Auth + DB (nivel MVP): usuarios, datos y seguridad básica",
    outcome: "Login simple + guardar datos + reglas de acceso.",
    tools: ["Firebase Auth", "Firestore"],
  },
  {
    n: 13,
    slug: "13-ai-ui",
    title: "UI con IA: asistentes, autocompletado, generación y moderación",
    outcome: "Agregás una feature IA con guardrails (no prompt-injection naïve).",
    tools: ["Safety", "Moderation"],
  },
  {
    n: 14,
    slug: "14-deploy",
    title: "Deploy pro: preview deploys, env vars, CI",
    outcome: "Deploy confiable: staging/preview + prod + variables de entorno.",
    tools: ["Vercel", "GitHub Actions"],
  },
  {
    n: 15,
    slug: "15-performance-a11y",
    title: "Performance + Accesibilidad + SEO (sin excusas)",
    outcome: "Checklist real: Core Web Vitals, a11y, SEO técnico.",
    tools: ["Lighthouse", "WebPageTest"],
  },
  {
    n: 16,
    slug: "16-capstone",
    title: "Capstone: construir y presentar una web con IA de 0 a prod",
    outcome: "Proyecto final listo: web real con IA integrada + demo + repo.",
    tools: ["Todo el stack"],
  },
];
