import React, { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function cn(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(' ');
}

function useHeroReveal(scopeRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const el = scopeRef.current;
    if (!el) return;

    const q = (sel: string) => Array.from(el.querySelectorAll(sel));
    const items = q('[data-reveal]');

    gsap.set(items, { opacity: 0, y: 12 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.06,
      ease: 'power3.out',
      delay: 0.05,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [scopeRef]);
}

function DiagnosticShuffler() {
  const labels = useMemo(
    () => [
      'Idea → MVP en 2 horas',
      'Diseño que conecta con el usuario',
      'Feature IA que crea valor',
    ],
    []
  );

  const [stack, setStack] = useState(labels);

  useEffect(() => {
    const id = window.setInterval(() => {
      setStack((prev) => {
        const next = [...prev];
        // array.unshift(array.pop())
        const last = next.pop();
        if (last) next.unshift(last);
        return next;
      });
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative h-32">
      {stack.slice(0, 3).map((t, i) => (
        <div
          key={t}
          className={cn(
            'absolute left-0 right-0 rounded-[1.4rem] border border-white/10 p-4',
            'shadow-[0_18px_50px_rgba(0,0,0,.45)]'
          )}
          style={{
            transform: `translateY(${i * 16}px) scale(${1 - i * 0.04})`,
            transitionProperty: 'transform',
            transitionDuration: '520ms',
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            backgroundColor: i === 0 ? '#0D0D12' : '#0a0a0e',
            zIndex: 3 - i,
          }}
        >
          <div className="text-xs tracking-[0.18em] text-white/60">QUÉ VAMOS A HACER</div>
          <div className="mt-2 text-sm text-white/90">{t}</div>
        </div>
      ))}
    </div>
  );
}

function TelemetryTypewriter() {
  const messages = useMemo(
    () => [
      '[live] prompt → prototipo…',
      '[ok] UI coherente (dark + champagne)',
      '[ok] checklist + ejercicios',
      '[warn] costo tokens: controlado',
      '[ok] deploy listo',
    ],
    []
  );

  const [line, setLine] = useState('');
  const [i, setI] = useState(0);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const cursorId = window.setInterval(() => setCursor((c) => !c), 420);
    return () => window.clearInterval(cursorId);
  }, []);

  useEffect(() => {
    const full = messages[i % messages.length];
    let k = 0;
    setLine('');

    const id = window.setInterval(() => {
      k++;
      setLine(full.slice(0, k));
      if (k >= full.length) {
        window.clearInterval(id);
        window.setTimeout(() => setI((x) => x + 1), 1200);
      }
    }, 18);

    return () => window.clearInterval(id);
  }, [i, messages]);

  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-[#0D0D12]/55 p-4">
      <div className="flex items-center justify-between">
        <div className="text-xs tracking-[0.18em] text-white/60">LIVE FEED</div>
        <div className="flex items-center gap-2 text-xs text-white/60">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--champagne)] opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          conectado
        </div>
      </div>
      <div
        className="mt-3 font-mono text-sm text-white/85"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        {line}
        <span
          className="ml-1 inline-block h-[1.1em] w-[0.55em] align-middle"
          style={{
            background: cursor ? 'var(--champagne)' : 'transparent',
            opacity: 0.9,
          }}
        />
      </div>
    </div>
  );
}

/** Paneles inclinados tipo flow como fondo grande del hero (derecha), superpuestos y semitransparentes */
const TILT_CARDS = [
  { rotate: -10, x: '58%', y: '-2%', w: '46%', minH: '220px', opacity: 0.58, content: ['prompt → modelo', '→ resultado', 'clicks'] },
  { rotate: -5, x: '63%', y: '12%', w: '42%', minH: '200px', opacity: 0.46, content: ['idea → MVP', '→ deploy', 'iteración'] },
  { rotate: 2, x: '67%', y: '26%', w: '38%', minH: '190px', opacity: 0.36, content: ['input → AI', '→ output', 'flow'] },
  { rotate: 6, x: '70%', y: '40%', w: '36%', minH: '180px', opacity: 0.28, content: ['cursor → ship', '→ repeat', 'loop'] },
];

function HeroTiltBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {TILT_CARDS.map((card, i) => (
        <div
          key={i}
          className="absolute rounded-2xl border border-white/[0.08] bg-[#0D0D12]/60 backdrop-blur-sm"
          style={{
            left: card.x,
            top: card.y,
            width: card.w,
            minHeight: card.minH,
            transform: `rotate(${card.rotate}deg)`,
            opacity: card.opacity,
            boxShadow: '0 20px 40px -15px rgba(0,0,0,.4)',
          }}
        >
          <div className="flex h-full flex-col justify-between p-4 text-white/40">
            <div className="font-mono text-xs tracking-wide">
              {card.content[0]}
            </div>
            <div className="font-mono text-xs tracking-wide text-white/30">
              → {card.content[1]}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-white/25">
              {card.content[2]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CursorProtocolScheduler() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cursor = el.querySelector('[data-cursor]') as HTMLElement | null;
    const cells = Array.from(el.querySelectorAll('[data-day]')) as HTMLElement[];
    const save = el.querySelector('[data-save]') as HTMLElement | null;
    if (!cursor || cells.length === 0 || !save) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.0 });
    gsap.set(cursor, { opacity: 0, x: 0, y: 0 });

    const day = cells[Math.floor(Math.random() * cells.length)];
    const dayBox = day.getBoundingClientRect();
    const rootBox = el.getBoundingClientRect();

    const dx = dayBox.left - rootBox.left + dayBox.width * 0.6;
    const dy = dayBox.top - rootBox.top + dayBox.height * 0.8;

    const saveBox = save.getBoundingClientRect();
    const sx = saveBox.left - rootBox.left + saveBox.width * 0.6;
    const sy = saveBox.top - rootBox.top + saveBox.height * 0.6;

    tl.to(cursor, { opacity: 1, duration: 0.2 })
      .to(cursor, { x: dx, y: dy, duration: 0.7, ease: 'power3.out' })
      .to(day, { scale: 0.95, duration: 0.08 })
      .to(day, { scale: 1, duration: 0.12 })
      .to(day, { backgroundColor: 'rgba(225, 198, 132, 0.22)', duration: 0.18 })
      .to(cursor, { x: sx, y: sy, duration: 0.6, ease: 'power3.out' })
      .to(save, { scale: 0.95, duration: 0.08 })
      .to(save, { scale: 1, duration: 0.12 })
      .to(cursor, { opacity: 0, duration: 0.25 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <div className="grid grid-cols-7 gap-2 text-xs text-white/70">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, idx) => (
          <div
            key={idx}
            data-day
            className="flex h-9 items-center justify-center rounded-xl border border-white/10 bg-[#0D0D12]/55 transition"
          >
            {d}
          </div>
        ))}
      </div>
      <button
        data-save
        className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/85 transition hover:-translate-y-[1px]"
      >
        Save
      </button>
      <svg
        data-cursor
        className="pointer-events-none absolute left-0 top-0"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 3l16 9-9 2-2 9L4 3z"
          fill="var(--champagne)"
          opacity="0.92"
        />
      </svg>
    </div>
  );
}



export default function CourseHomeInstrument() {
  const ref = useRef<HTMLElement | null>(null);
  useHeroReveal(ref as any);

  return (
    <section ref={ref as any} className="mx-auto max-w-6xl px-5 pt-28">
      {/* Hero sentinel for FloatingNav morph */}
      <div id="hero-sentinel" className="h-1 w-1" />

      <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-35" style={{
          background:
            'radial-gradient(900px 340px at 20% 20%, rgba(225,198,132,0.22), transparent 55%), radial-gradient(700px 280px at 80% 30%, rgba(132,199,225,0.14), transparent 60%)',
        }} />
        <HeroTiltBackground />

        <div className="relative">
          <div>
            <div data-reveal className="inline-flex items-center gap-2 rounded-[2rem] border border-white/10 bg-[#0D0D12]/35 px-4 py-2 text-xs tracking-[0.2em] text-white/70">
              <Sparkles size={14} /> DISEÑO INTERACTIVO
            </div>

            <h1 data-reveal className="mt-6 text-4xl md:w-[80%] md:text-6xl font-extrabold tracking-tight leading-[1.02]">
              Aprendé a construir producto real,
              <span
                className="ml-3"
                style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: 'var(--champagne)' }}
              >
                rápido
              </span>
              .
            </h1>

            <p data-reveal className="mt-5 text-white/75 max-w-xl">
              Cómo pasar de la idea al producto, con la Inteligencia Artificial como copiloto.
            </p>

            <div data-reveal className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="/plan"
                className="inline-flex items-center justify-center gap-2 rounded-[2rem] bg-[color:var(--champagne)] px-6 py-3 font-semibold text-[#0D0D12] transition hover:-translate-y-[1px] hover:scale-[1.02] active:scale-[0.99]"
              >
                Ver el plan <ArrowRight size={18} />
              </a>
              <a
                href="/clase/01-orientacion"
                className="inline-flex items-center justify-center gap-2 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/85 transition hover:-translate-y-[1px]"
              >
                Empezar por la Clase 1
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 md:items-stretch">
            <div data-reveal className="flex min-h-0 flex-col rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)] md:h-full">
              <div className="text-sm font-semibold">Los procesos del futuro</div>
              <p className="mt-1 text-sm text-white/65">Elegí el camino más corto al valor.</p>
              <div className="mt-4 flex-1 min-h-0"><DiagnosticShuffler /></div>
            </div>

            <div data-reveal className="flex min-h-0 flex-col rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)] md:h-full">
              <div className="text-sm font-semibold">Deja que la IA te ayude a generar valor</div>
              <p className="mt-1 text-sm text-white/65">Iteración real: feedback + límites + costo.</p>
              <div className="mt-4 flex-1 min-h-0"><TelemetryTypewriter /></div>
            </div>

            <div data-reveal className="flex min-h-0 flex-col rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)] md:h-full">
              <div className="text-sm font-semibold">Avances semanales</div>
              <p className="mt-1 text-sm text-white/65">Ejercicios prácticos para avanzar todos los días.</p>
              <div className="mt-4 flex-1 min-h-0"><CursorProtocolScheduler /></div>
            </div>
          </div>

          <div data-reveal className="mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
            <div className="flex items-center justify-between px-5 pt-5">
              <div>
                <div className="text-sm font-semibold">Demo (video)</div>
                <p className="mt-1 text-sm text-white/65">12 segundos — UI tour (isla + micro‑UI + manifiesto).</p>
              </div>
              <div className="text-xs text-white/60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>demo.mp4</div>
            </div>
            <div className="px-5 pb-5 pt-4">
              <video src="/demo.mp4" className="w-full rounded-[1.4rem] border border-white/10" muted playsInline loop autoPlay controls />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
