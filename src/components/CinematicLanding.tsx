import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Sparkles,
  Activity,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Preset B — Midnight Luxe (Dark Editorial)
const TOKENS = {
  obsidian: "#0D0D12",
  champagne: "#C9A84C",
  ivory: "#FAF8F5",
  slate: "#2A2A35",
};

const brand = {
  name: "Bardo",
  purpose:
    "Pedidos por WhatsApp para rotiserías/casas de comida en UY/AR: catálogo, cobro y estados.",
  cta: "Pedir piloto",
  xUrl: "https://x.com/bardo_botardo",
};

const valueProps = [
  {
    title: "Menos errores en hora pico",
    desc: "Pedido guiado que captura dirección, horario, extras y notas sin ida y vuelta.",
  },
  {
    title: "Cobro + confirmación sin fricción",
    desc: "Un flujo que reduce el “¿pagaste?” y acelera la preparación.",
  },
  {
    title: "Estados + handoff a cocina",
    desc: "Pendiente → Pagado → En preparación → Listo. Sin revisar 40 chats.",
  },
];

const unsplash = {
  hero:
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2400&q=80",
  texture:
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=2400&q=80",
};

function cn(...xs: Array<string | false | undefined | null>) {
  return xs.filter(Boolean).join(" ");
}

function MagneticButton({
  href,
  children,
  variant = "primary",
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}) {
  const base =
    "relative inline-flex items-center gap-2 rounded-[2rem] px-5 py-3 font-semibold transition-transform duration-200 will-change-transform overflow-hidden";
  const lift =
    "hover:-translate-y-[1px] hover:scale-[1.03] active:scale-[0.99]";
  const ease = "[transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)]";

  const ring =
    variant === "primary"
      ? "border border-white/10 text-[var(--ivory)]"
      : "border border-white/10 text-[var(--ivory)] bg-white/5";

  const bg =
    variant === "primary"
      ? "bg-[color:var(--champagne)] text-[#0D0D12]"
      : "bg-white/5";

  const Comp: any = href ? "a" : "button";

  return (
    <Comp
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      className={cn(base, lift, ease, ring, bg)}
      style={{
        // CSS vars available from Layout
        // @ts-ignore
        "--champagne": TOKENS.champagne,
        "--ivory": TOKENS.ivory,
      }}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 -translate-x-[120%] bg-black/10",
          "transition-transform duration-300",
          "group-hover:translate-x-0"
        )}
      />
      <span className="relative z-10">{children}</span>
    </Comp>
  );
}

function FloatingIslandNav({ heroRef }: { heroRef: React.RefObject<HTMLElement> }) {
  const navRef = useRef<HTMLDivElement>(null);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setSolid(!entry.isIntersecting);
      },
      { root: null, threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [heroRef]);

  return (
    <div
      ref={navRef}
      className={cn(
        "fixed left-1/2 top-5 z-40 -translate-x-1/2",
        "rounded-[3rem] px-4 py-2",
        "border border-white/10",
        solid
          ? "bg-white/8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.45)]"
          : "bg-transparent"
      )}
      style={{
        // tiny translucent bg
        backgroundColor: solid ? "rgba(250,248,245,0.06)" : "transparent",
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-baseline gap-2 px-2">
          <span className="font-semibold tracking-tight">{brand.name}</span>
          <span className="text-xs text-white/60 font-medium">UY/AR</span>
        </div>

        <nav className="hidden md:flex items-center gap-3 px-2 text-sm text-white/75">
          <a className="hover:-translate-y-[1px] transition" href="#features">
            Features
          </a>
          <a className="hover:-translate-y-[1px] transition" href="#protocol">
            Protocolo
          </a>
          <a className="hover:-translate-y-[1px] transition" href="#pricing">
            Pricing
          </a>
        </nav>

        <div className="ml-1">
          <a
            href={brand.xUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-[2rem] px-4 py-2",
              "bg-[color:var(--champagne)] text-[#0D0D12] font-semibold",
              "hover:-translate-y-[1px] hover:scale-[1.03]",
              "[transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)]",
              "transition-transform"
            )}
            style={{
              // @ts-ignore
              "--champagne": TOKENS.champagne,
            }}
          >
            {brand.cta}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

function Hero({ heroRef }: { heroRef: React.RefObject<HTMLElement> }) {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrap.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-in",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
        }
      );
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[100dvh] overflow-hidden"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${unsplash.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_70%,rgba(201,168,76,.18),transparent_60%)]" />

      <div
        ref={wrap}
        className="relative z-10 flex h-full items-end"
      >
        <div className="w-full max-w-5xl px-6 pb-14 md:px-10 md:pb-16">
          <div className="max-w-2xl">
            <p className="hero-in text-xs tracking-[0.22em] text-white/70">
              MIDNIGHT LUXE · UY/AR · WHATSAPP-FIRST
            </p>

            {/* Hero pattern: "[Aspirational noun] meets" / "[Precision word]." */}
            <h1 className="hero-in mt-3 leading-[0.95]">
              <span className="block font-extrabold tracking-tight text-[clamp(2.2rem,5vw,4.4rem)]">
                Pedidos sin caos, en serio.
              </span>
              <span
                className="mt-2 block italic text-[clamp(3.2rem,9vw,7.2rem)]"
                style={{ fontFamily: "Playfair Display, serif", color: TOKENS.ivory }}
              >
                Precisión.
              </span>
            </h1>

            <p className="hero-in mt-4 text-white/78 max-w-xl">
              {brand.purpose}
            </p>

            <div className="hero-in mt-6 flex flex-wrap gap-3">
              <MagneticButton href={brand.xUrl}>
                {brand.cta} <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton href="#features" variant="secondary">
                Ver cómo funciona
              </MagneticButton>
            </div>

            <div className="hero-in mt-7 flex items-center gap-3 text-xs text-white/60">
              <span className="inline-flex items-center gap-2 rounded-[2rem] border border-white/10 bg-white/5 px-3 py-2">
                <ShieldCheck size={14} /> Sin spam
              </span>
              <span className="inline-flex items-center gap-2 rounded-[2rem] border border-white/10 bg-white/5 px-3 py-2">
                <CalendarCheck size={14} /> Piloto rápido
              </span>
              <span className="inline-flex items-center gap-2 rounded-[2rem] border border-white/10 bg-white/5 px-3 py-2">
                <Activity size={14} /> En hora pico
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagnosticShuffler({ title, desc }: { title: string; desc: string }) {
  const [stack, setStack] = useState([
    { label: "Dirección confirmada", value: "OK" },
    { label: "Extras explícitos", value: "2" },
    { label: "Horario listo", value: "19:30" },
  ]);

  useEffect(() => {
    const id = setInterval(() => {
      setStack((prev) => {
        const next = prev.slice();
        // cycle vertically
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        next.unshift(next.pop()!);
        return next;
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[rgba(250,248,245,0.06)] p-5 shadow-[0_30px_90px_rgba(0,0,0,.45)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{desc}</p>
        </div>
        <Sparkles size={18} className="text-[color:var(--champagne)]" />
      </div>

      <div className="relative mt-5 h-[136px]">
        {stack.map((s, i) => {
          const top = i * 10;
          const scale = 1 - i * 0.04;
          const opacity = 1 - i * 0.18;
          return (
            <div
              key={s.label}
              className="absolute left-0 right-0 rounded-[1.5rem] border border-white/10 bg-[#0D0D12]/70 p-4 backdrop-blur"
              style={{
                transform: `translateY(${top}px) scale(${scale})`,
                opacity,
                transition:
                  "transform 650ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 650ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="text-xs text-white/55" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  DIAGNOSTIC
                </div>
                <div className="text-xs text-white/55" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  #{String(3 - i).padStart(2, "0")}
                </div>
              </div>
              <div className="mt-2 flex items-baseline justify-between gap-3">
                <div className="text-sm font-medium">{s.label}</div>
                <div
                  className="text-xl font-semibold"
                  style={{ color: TOKENS.champagne, fontFamily: "JetBrains Mono, monospace" }}
                >
                  {s.value}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TelemetryTypewriter({ title, desc }: { title: string; desc: string }) {
  const lines = useMemo(
    () => [
      "[Live] Pedido recibido · 2 items · 1 extra",
      "[Utility] Enviando link de pago…",
      "[OK] Pago confirmado · preparando",
      "[ETA] Listo en 18 min · avisar cliente",
    ],
    []
  );

  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const current = lines[idx] ?? "";
    const tick = setInterval(() => {
      setText((prev) => {
        const next = current.slice(0, Math.min(pos + 1, current.length));
        return next;
      });
      setPos((p) => p + 1);
    }, 28);

    if (pos >= current.length) {
      clearInterval(tick);
      const pause = setTimeout(() => {
        setIdx((i) => (i + 1) % lines.length);
        setPos(0);
        setText("");
      }, 900);
      return () => clearTimeout(pause);
    }

    return () => clearInterval(tick);
  }, [idx, pos, lines]);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[rgba(250,248,245,0.06)] p-5 shadow-[0_30px_90px_rgba(0,0,0,.45)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{desc}</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-white/60" style={{ fontFamily: "JetBrains Mono, monospace" }}>
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full"
              style={{ backgroundColor: TOKENS.champagne, opacity: 0.55 }}
            />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: TOKENS.champagne }} />
          </span>
          LIVE FEED
        </div>
      </div>

      <div
        className="mt-5 rounded-[1.5rem] border border-white/10 bg-[#0D0D12]/70 p-4 backdrop-blur"
        style={{ fontFamily: "JetBrains Mono, monospace" }}
      >
        <div className="text-xs text-white/55">telemetry://whatsapp/orders</div>
        <div className="mt-2 text-sm text-white/85">
          {text}
          <span
            className="ml-1 inline-block h-4 w-[2px] align-middle"
            style={{ backgroundColor: TOKENS.champagne, animation: "blink 900ms step-end infinite" }}
          />
        </div>
      </div>

      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </div>
  );
}

function CursorScheduler({ title, desc }: { title: string; desc: string }) {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrap.current) return;
    const ctx = gsap.context(() => {
      const cursor = wrap.current?.querySelector(".cursor") as HTMLElement | null;
      const days = Array.from(wrap.current?.querySelectorAll(".day") ?? []);
      const save = wrap.current?.querySelector(".save") as HTMLElement | null;
      if (!cursor || days.length === 0 || !save) return;

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
      tl.set(cursor, { opacity: 0, x: -20, y: -10 });
      tl.to(cursor, { opacity: 1, duration: 0.2, ease: "power2.out" });

      const pick = [1, 3, 5];
      pick.forEach((i) => {
        const d = days[i];
        const r = d.getBoundingClientRect();
        const w = wrap.current!.getBoundingClientRect();
        const x = r.left - w.left + r.width * 0.6;
        const y = r.top - w.top + r.height * 0.6;
        tl.to(cursor, { x, y, duration: 0.55, ease: "power2.inOut" }, "+=0.1");
        tl.to(
          d,
          {
            scale: 0.95,
            duration: 0.12,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1,
          },
          "<"
        );
        tl.to(d, { backgroundColor: `${TOKENS.champagne}22`, borderColor: `${TOKENS.champagne}55`, duration: 0.2 }, "<");
      });

      {
        const r = save.getBoundingClientRect();
        const w = wrap.current!.getBoundingClientRect();
        const x = r.left - w.left + r.width * 0.6;
        const y = r.top - w.top + r.height * 0.6;
        tl.to(cursor, { x, y, duration: 0.55, ease: "power2.inOut" }, "+=0.15");
        tl.to(save, { scale: 0.97, duration: 0.14, ease: "power2.inOut", yoyo: true, repeat: 1 }, "<");
      }

      tl.to(cursor, { opacity: 0, duration: 0.25, ease: "power2.out" }, "+=0.1");
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrap}
      className="rounded-[2rem] border border-white/10 bg-[rgba(250,248,245,0.06)] p-5 shadow-[0_30px_90px_rgba(0,0,0,.45)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{desc}</p>
        </div>
        <div className="text-xs text-white/60" style={{ fontFamily: "JetBrains Mono, monospace" }}>
          PROTOCOL
        </div>
      </div>

      <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-[#0D0D12]/70 p-4 backdrop-blur">
        <div className="grid grid-cols-7 gap-2 text-xs text-white/60" style={{ fontFamily: "JetBrains Mono, monospace" }}>
          {"SMTWTFS".split("").map((d) => (
            <div key={d} className="text-center">{d}</div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="day h-10 rounded-[1rem] border border-white/10 bg-white/5"
            />
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="save rounded-[1.25rem] border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white/90"
          >
            Save
          </button>
        </div>

        <div className="cursor pointer-events-none absolute" style={{ position: "relative" }}>
          <svg
            className="cursor"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            style={{ position: "absolute", left: 0, top: 0, transform: "translate(-9999px,-9999px)" }}
          />
        </div>

        {/* Real cursor */}
        <div
          className="cursor absolute"
          style={{
            width: 16,
            height: 16,
            transform: "translate(-9999px,-9999px)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="cursor"
          >
            <path
              d="M6 3l12 9-7 2-2 7-3-18z"
              fill={TOKENS.ivory}
              opacity="0.95"
            />
            <path
              d="M6 3l12 9-7 2-2 7-3-18z"
              stroke={TOKENS.champagne}
              strokeWidth="1.2"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feat-in",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 72%",
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={ref} className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="feat-in max-w-2xl">
          <p className="text-xs tracking-[0.22em] text-white/60">FEATURES</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Artefactos funcionales.
            <span
              className="ml-2 italic"
              style={{ fontFamily: "Playfair Display, serif", color: TOKENS.champagne }}
            >
              No slides.
            </span>
          </h2>
          <p className="mt-3 text-white/70">
            Tres módulos: uno para orden, uno para cobro, uno para control.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="feat-in">
            <DiagnosticShuffler title={valueProps[0].title} desc={valueProps[0].desc} />
          </div>
          <div className="feat-in">
            <TelemetryTypewriter title={valueProps[1].title} desc={valueProps[1].desc} />
          </div>
          <div className="feat-in">
            <CursorScheduler title={valueProps[2].title} desc={valueProps[2].desc} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const words = ref.current!.querySelectorAll(".split-word");
      gsap.fromTo(
        words,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 72%",
          },
        }
      );

      gsap.to(".texture", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const split = (s: string) =>
    s.split(" ").map((w, i) => (
      <span key={i} className="split-word inline-block will-change-transform">
        {w}&nbsp;
      </span>
    ));

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0B0B10" }}
    >
      <div
        className="texture absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `url(${unsplash.texture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(0.9) contrast(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B10] via-[#0B0B10]/70 to-[#0B0B10]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10">
        <p className="text-xs tracking-[0.22em] text-white/60">THE MANIFESTO</p>

        <div className="mt-5 max-w-4xl">
          <p className="text-white/70 text-lg md:text-xl">
            {split("La mayoría de las herramientas de WhatsApp se enfocan en marketing o soporte.")}
          </p>

          <p
            className="mt-6 text-[clamp(2.2rem,5.2vw,4.6rem)] leading-[1.03] font-semibold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {split("Nosotros nos enfocamos en hora pico: pedido, pago y estados.")}
            <span style={{ color: TOKENS.champagne }} className="split-word italic">
              precisión
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function Protocol() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".p-card");
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: next ? "bottom top" : "+=200",
          pin: true,
          pinSpacing: false,
        });

        if (i > 0) {
          gsap.fromTo(
            card,
            { opacity: 0.0, scale: 0.98 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
              },
            }
          );
        }

        if (i < cards.length - 1) {
          const underneath = card;
          ScrollTrigger.create({
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              const p = self.progress;
              gsap.set(underneath, {
                scale: 1 - 0.1 * p,
                filter: `blur(${20 * p}px)`,
                opacity: 1 - 0.5 * p,
              });
            },
          });
        }
      });

      // Card-specific motifs
      gsap.to(".motif-rotate", {
        rotate: 360,
        duration: 18,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".laser", {
        xPercent: 120,
        duration: 2.8,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".wave", {
        strokeDashoffset: -240,
        duration: 2.6,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      n: "01",
      title: "Capturar",
      desc: "Pedido guiado con datos completos: dirección, horario, extras.",
      motif: "rotate",
    },
    {
      n: "02",
      title: "Confirmar",
      desc: "Cobro + confirmación rápida. Menos fricción, más conversión.",
      motif: "laser",
    },
    {
      n: "03",
      title: "Operar",
      desc: "Estados claros y handoff a cocina/reparto. Sin perder contexto.",
      motif: "wave",
    },
  ];

  return (
    <section id="protocol" ref={ref} className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <p className="text-xs tracking-[0.22em] text-white/60">PROTOCOL</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Un sistema para operar.
          <span
            className="ml-2 italic"
            style={{ fontFamily: "Playfair Display, serif", color: TOKENS.champagne }}
          >
            No improvisar.
          </span>
        </h2>
      </div>

      <div className="relative">
        {steps.map((s) => (
          <div key={s.n} className="p-card min-h-[100vh] px-6 md:px-10">
            <div className="mx-auto max-w-6xl pt-24">
              <div className="rounded-[3rem] border border-white/10 bg-[rgba(250,248,245,0.06)] p-8 md:p-10 shadow-[0_40px_140px_rgba(0,0,0,.55)]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                  <div className="max-w-xl">
                    <div
                      className="text-sm text-white/60"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      STEP {s.n}
                    </div>
                    <div className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                      {s.title}
                    </div>
                    <p className="mt-3 text-white/70">{s.desc}</p>
                  </div>

                  <div className="flex-1">
                    {s.motif === "rotate" && (
                      <svg viewBox="0 0 200 200" className="w-full max-w-[360px] mx-auto opacity-90">
                        <g className="motif-rotate" style={{ transformOrigin: "100px 100px" }}>
                          <circle cx="100" cy="100" r="62" fill="none" stroke="rgba(201,168,76,.55)" strokeWidth="2" />
                          <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(250,248,245,.22)" strokeWidth="2" />
                          <path d="M100 38 C130 54 140 80 100 100 C60 120 70 146 100 162" fill="none" stroke="rgba(201,168,76,.65)" strokeWidth="3" strokeLinecap="round" />
                        </g>
                      </svg>
                    )}

                    {s.motif === "laser" && (
                      <div className="relative mx-auto max-w-[420px]">
                        <div className="grid grid-cols-10 gap-2">
                          {Array.from({ length: 60 }).map((_, i) => (
                            <div key={i} className="h-3 rounded-full bg-white/7" />
                          ))}
                        </div>
                        <div className="laser pointer-events-none absolute left-0 top-1/2 h-[2px] w-1/2 -translate-y-1/2" style={{ backgroundColor: TOKENS.champagne, boxShadow: `0 0 24px ${TOKENS.champagne}` }} />
                      </div>
                    )}

                    {s.motif === "wave" && (
                      <svg viewBox="0 0 520 120" className="w-full max-w-[520px] mx-auto">
                        <path
                          d="M0 62 C 40 62, 40 22, 80 22 S 120 102, 160 102 S 200 22, 240 22 S 280 102, 320 102 S 360 22, 400 22 S 440 102, 480 102 S 520 62, 520 62"
                          fill="none"
                          stroke="rgba(250,248,245,.25)"
                          strokeWidth="3"
                        />
                        <path
                          className="wave"
                          d="M0 62 C 40 62, 40 22, 80 22 S 120 102, 160 102 S 200 22, 240 22 S 280 102, 320 102 S 360 22, 400 22 S 440 102, 480 102 S 520 62, 520 62"
                          fill="none"
                          stroke={TOKENS.champagne}
                          strokeWidth="3.5"
                          strokeDasharray="240"
                          strokeDashoffset="0"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Essential",
      price: "US$29/mo",
      bullets: ["Catálogo + pedido guiado", "Estados básicos", "Handoff humano"],
      featured: false,
    },
    {
      name: "Performance",
      price: "US$59/mo",
      bullets: ["Cobro + confirmación", "Plantillas y tags", "Reportes de pico"],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Hablemos",
      bullets: ["Multi-sucursal", "Integraciones", "SLA + soporte"],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-22 md:px-10">
        <p className="text-xs tracking-[0.22em] text-white/60">MEMBERSHIP</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Pricing simple.
          <span
            className="ml-2 italic"
            style={{ fontFamily: "Playfair Display, serif", color: TOKENS.champagne }}
          >
            Sin letra chica.
          </span>
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={cn(
                "rounded-[2.5rem] border border-white/10 p-6 shadow-[0_30px_90px_rgba(0,0,0,.45)]",
                t.featured
                  ? "bg-[color:var(--champagne)] text-[#0D0D12] scale-[1.02]"
                  : "bg-[rgba(250,248,245,0.06)]"
              )}
              style={{
                // @ts-ignore
                "--champagne": TOKENS.champagne,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">{t.name}</div>
                {t.featured && (
                  <span
                    className="rounded-[2rem] px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: "rgba(13,13,18,0.12)" }}
                  >
                    Recommended
                  </span>
                )}
              </div>
              <div
                className={cn(
                  "mt-3 text-3xl font-semibold",
                  t.featured ? "text-[#0D0D12]" : "text-white"
                )}
              >
                {t.price}
              </div>
              <ul className={cn("mt-5 space-y-2", t.featured ? "text-[#0D0D12]/80" : "text-white/75")}>
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: t.featured ? "#0D0D12" : TOKENS.champagne }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  className={cn(
                    "inline-flex items-center gap-2 rounded-[2rem] px-5 py-3 font-semibold",
                    "transition-transform hover:-translate-y-[1px] hover:scale-[1.03]",
                    "[transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)]",
                    t.featured
                      ? "bg-[#0D0D12] text-white"
                      : "border border-white/10 bg-white/5 text-white"
                  )}
                  href={brand.xUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.featured ? "Pedir piloto" : "Hablar"}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative mt-10 rounded-t-[4rem] border-t border-white/10 bg-[#0A0A10]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold tracking-tight">{brand.name} 🧉</div>
            <p className="mt-2 text-sm text-white/65">
              {brand.purpose}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-white/60" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                NAV
              </div>
              <div className="mt-3 space-y-2 text-white/75">
                <a className="block hover:-translate-y-[1px] transition" href="#features">Features</a>
                <a className="block hover:-translate-y-[1px] transition" href="#protocol">Protocolo</a>
                <a className="block hover:-translate-y-[1px] transition" href="#pricing">Pricing</a>
              </div>
            </div>
            <div>
              <div className="text-white/60" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                LINKS
              </div>
              <div className="mt-3 space-y-2 text-white/75">
                <a className="block hover:-translate-y-[1px] transition" href={brand.xUrl} target="_blank" rel="noreferrer">X</a>
                <a className="block hover:-translate-y-[1px] transition" href="/">Home</a>
              </div>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="inline-flex items-center gap-2 rounded-[2rem] border border-white/10 bg-white/5 px-4 py-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400/50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              <span className="text-xs text-white/70" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                SYSTEM OPERATIONAL
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/45" style={{ fontFamily: "JetBrains Mono, monospace" }}>
          © {new Date().getFullYear()} {brand.name}. Built in public.
        </div>
      </div>
    </footer>
  );
}

export default function CinematicLanding() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <div
      className="min-h-screen"
      style={
        {
          // @ts-ignore
          "--obsidian": TOKENS.obsidian,
          "--champagne": TOKENS.champagne,
          "--ivory": TOKENS.ivory,
          "--slate": TOKENS.slate,
        } as any
      }
    >
      <FloatingIslandNav heroRef={heroRef} />
      <Hero heroRef={heroRef} />
      <Features />
      <Philosophy />
      <Protocol />
      <Pricing />
      <Footer />
    </div>
  );
}
