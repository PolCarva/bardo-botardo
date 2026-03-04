import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

function cn(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(' ');
}

export default function FloatingNav() {
  const [solid, setSolid] = useState(false);

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
            Vibecoding <span className="opacity-70">16</span>
          </a>

          <nav className="hidden md:flex items-center gap-3 px-2 text-sm text-white/75">
            <a className="transition hover:-translate-y-[1px] hover:text-white" href="/plan">
              Plan
            </a>
            <a className="transition hover:-translate-y-[1px] hover:text-white" href="/recursos">
              Recursos
            </a>
            <a className="transition hover:-translate-y-[1px] hover:text-white" href="/ejemplos">
              Ejemplos
            </a>
            <a className="transition hover:-translate-y-[1px] hover:text-white" href="/profesor/01-orientacion">
              Profesor
            </a>
          </nav>

          <a
            href="/plan"
            className={cn(
              'inline-flex items-center gap-2 rounded-[2rem] px-4 py-2 font-semibold',
              'bg-[color:var(--champagne)] text-[#0D0D12]',
              'transition-transform hover:-translate-y-[1px] hover:scale-[1.03] active:scale-[0.99]',
              '[transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)]'
            )}
          >
            Empezar <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
