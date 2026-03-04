import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { modules } from '../lib/modules';
import { ArrowRight, Sparkles, Layers3, Wand2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const heroImg =
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2400&q=80';

function cn(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(' ');
}

function MagneticLink({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  return (
    <a
      href={href}
      className={cn(
        'group relative inline-flex items-center gap-2 rounded-[2rem] px-5 py-3 font-semibold overflow-hidden',
        'transition-transform hover:-translate-y-[1px] hover:scale-[1.03] active:scale-[0.99]',
        '[transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)]',
        variant === 'primary'
          ? 'bg-[color:var(--champagne)] text-[#0D0D12]'
          : 'border border-white/10 bg-white/5 text-white'
      )}
    >
      <span
        aria-hidden
        className={cn(
          'absolute inset-0 -translate-x-[120%] bg-black/10',
          'transition-transform duration-300 group-hover:translate-x-0'
        )}
      />
      <span className="relative z-10">{children}</span>
    </a>
  );
}

export default function ImpactCourseHome() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.in',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08 }
      );

      gsap.fromTo(
        '.mod',
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: '#mods', start: 'top 72%' },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_40%,rgba(201,168,76,.18),transparent_60%)]" />

        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-20">
          <p className="in text-xs tracking-[0.22em] text-white/65">CURSO · 16 CLASES · 0→PRO</p>

          <h1 className="in mt-4 font-extrabold tracking-tight leading-[0.95] text-[clamp(2.4rem,6vw,4.8rem)]">
            Vibecoding para gente normal.
            <span
              className="block mt-2 italic"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--champagne)' }}
            >
              Producto + diseño + IA.
            </span>
          </h1>

          <p className="in mt-5 max-w-2xl text-white/75">
            Aprendés con HTML/CSS/JS y terminás construyendo una web real con integración de IA.
            Sin frameworks obligatorios. Si alguien hace backend: Node + Express.
          </p>

          <div className="in mt-8 flex flex-wrap gap-3">
            <MagneticLink href="/plan">
              Ver plan completo <ArrowRight size={16} />
            </MagneticLink>
            <MagneticLink href="/recursos" variant="secondary">
              Recursos <Sparkles size={16} />
            </MagneticLink>
          </div>

          <div className="in mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div className="text-xs text-white/60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  MENTALIDAD
                </div>
                <Layers3 size={16} className="text-[color:var(--champagne)]" />
              </div>
              <div className="mt-2 font-semibold">Producto &gt; idea</div>
              <p className="mt-2 text-sm text-white/70">
                Si no resuelve un problema real, es hobby. Aprendemos a enfocarnos.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div className="text-xs text-white/60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  DISEÑO
                </div>
                <Wand2 size={16} className="text-[color:var(--champagne)]" />
              </div>
              <div className="mt-2 font-semibold">UX que se siente</div>
              <p className="mt-2 text-sm text-white/70">
                Flujo, claridad y componentes lindos. No “plantilla de escuela”.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div className="text-xs text-white/60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  IA
                </div>
                <Sparkles size={16} className="text-[color:var(--champagne)]" />
              </div>
              <div className="mt-2 font-semibold">IA como feature</div>
              <p className="mt-2 text-sm text-white/70">
                Integración real (Labs/Gemini), con guardrails y UX de confianza.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="mods" className="mx-auto max-w-6xl px-5 py-14">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.22em] text-white/60">MÓDULOS</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Un camino ordenado.
            <span
              className="ml-2 italic"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--champagne)' }}
            >
              Sin caos.
            </span>
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {modules.map((m) => (
            <a
              key={m.id}
              href="/plan"
              className="mod rounded-[2rem] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-[1px]"
            >
              <div className="text-xs text-white/60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {m.id.toUpperCase()} · {m.lessons.length} clases
              </div>
              <div className="mt-2 text-lg font-semibold">{m.title}</div>
              <div className="mt-2 text-sm text-white/70">{m.subtitle}</div>
              <div className="mt-4 text-sm text-[color:var(--champagne)] font-semibold inline-flex items-center gap-2">
                Ver clases <ArrowRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
