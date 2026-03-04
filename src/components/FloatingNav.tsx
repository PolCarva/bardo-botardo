import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const LAST_CLASS_KEY = 'di-last-class';

const CLASS_SLUGS = [
  '01-orientacion', '02-playgrounds', '03-ux-flujo-mvp', '04-antigravity',
  '05-mcp-skills', '06-git-vercel', '07-js-dom', '08-iteracion', '09-api-gemini-primera-peticion',
  '10-gemini-uso-real', '11-avance', '12-avance', '13-avance',
  '14-avance', '15-avance', '16-muestra',
];

function cn(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(' ');
}

function getCtaFromStorage(): { label: 'Empezar' | 'Seguir'; href: string } {
  if (typeof window === 'undefined') {
    return { label: 'Empezar', href: '/clase/01-orientacion' };
  }
  const last = window.localStorage.getItem(LAST_CLASS_KEY);
  const lastN = last ? parseInt(last, 10) : 0;
  if (!lastN || lastN < 1) {
    return { label: 'Empezar', href: '/clase/01-orientacion' };
  }
  if (lastN >= 16) {
    return { label: 'Seguir', href: '/plan' };
  }
  return { label: 'Seguir', href: `/clase/${CLASS_SLUGS[lastN]}` };
}

export default function FloatingNav() {
  const [solid, setSolid] = useState(false);
  const [cta, setCta] = useState<{ label: 'Empezar' | 'Seguir'; href: string }>({ label: 'Empezar', href: '/clase/01-orientacion' });

  useEffect(() => {
    const sentinel = document.getElementById('hero-sentinel');
    if (!sentinel) {
      setSolid(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  // Persistir última clase visitada y actualizar CTA al cargar la página
  useEffect(() => {
    const pathname = window.location.pathname;
    const match = pathname.match(/^\/clase\/([^/]+)$/);
    if (match) {
      const slug = match[1];
      const idx = CLASS_SLUGS.indexOf(slug);
      if (idx !== -1) {
        window.localStorage.setItem(LAST_CLASS_KEY, String(idx + 1));
      }
    }
    setCta(getCtaFromStorage());
  }, []);

  return (
    <div className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <div
        className={cn(
          'rounded-[3rem] border border-white/10 px-4 py-2',
          'shadow-[0_20px_60px_rgba(0,0,0,.45)]',
          solid ? 'bg-white/8 backdrop-blur-xl' : 'bg-transparent'
        )}
        style={{ backgroundColor: solid ? 'rgba(250,248,245,0.06)' : 'transparent' }}
      >
        <div className="flex items-center gap-3">
          <a className="px-2 font-semibold tracking-tight" href="/">
          Diseño <span className="italic" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--champagne)' }}> interactivo</span>
          </a>
         

          <nav className="md:min-w-[140px] items-center text-right gap-3 px-2 text-sm text-white/75">
            <a className="transition hover:-translate-y-[1px] hover:text-white" href="/plan">
              Plan
            </a>
          </nav>

          <a
            href={cta.href}
            className={cn(
              'inline-flex items-center gap-2 rounded-[2rem] px-4 py-2 font-semibold',
              'bg-[color:var(--champagne)] text-[#0D0D12]',
              'transition-transform hover:-translate-y-[1px] hover:scale-[1.03] active:scale-[0.99]',
              '[transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)]'
            )}
          >
            {cta.label} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
