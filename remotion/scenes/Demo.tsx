import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const champagne = '#E1C684';

const Title: React.FC<{ line1: string; line2?: string; at: number }> = ({
  line1,
  line2,
  at,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const t = Math.max(0, frame - at);
  const y = interpolate(t, [0, 18], [14, 0], { extrapolateRight: 'clamp' });
  const o = interpolate(t, [0, 14], [0, 1], { extrapolateRight: 'clamp' });
  const s = spring({ frame: t, fps, config: { damping: 18, stiffness: 140 } });

  return (
    <div style={{ opacity: o, transform: `translateY(${y}px) scale(${0.98 + 0.02 * s})` }}>
      <div style={{ fontFamily: 'Inter, system-ui, Arial', fontWeight: 800, fontSize: 64, letterSpacing: -1.2, lineHeight: 1.02 }}>
        {line1}
      </div>
      {line2 ? (
        <div style={{ marginTop: 8, fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 58, color: champagne, lineHeight: 1.02 }}>
          {line2}
        </div>
      ) : null}
    </div>
  );
};

const Pill: React.FC<{ label: string; x: number; y: number; at: number }> = ({
  label,
  x,
  y,
  at,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = Math.max(0, frame - at);
  const s = spring({ frame: t, fps, config: { damping: 22, stiffness: 180 } });

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: `translateY(${(1 - s) * 10}px)`,
        opacity: interpolate(t, [0, 10], [0, 1], { extrapolateRight: 'clamp' }),
        padding: '10px 14px',
        borderRadius: 999,
        border: '1px solid rgba(255,255,255,0.14)',
        background: 'rgba(13,13,18,0.55)',
        color: 'rgba(255,255,255,0.85)',
        fontFamily: 'JetBrains Mono, ui-monospace, SFMono-Regular',
        fontSize: 16,
        letterSpacing: 0.4,
        boxShadow: '0 18px 50px rgba(0,0,0,0.45)',
      }}
    >
      <span style={{ color: champagne }}>$</span> {label}
    </div>
  );
};

export const Demo: React.FC<{ title: string }> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const vignette = `radial-gradient(1100px 520px at 20% 20%, rgba(225,198,132,0.18), transparent 60%), radial-gradient(900px 420px at 80% 20%, rgba(130,210,255,0.14), transparent 60%), radial-gradient(1200px 700px at 50% 90%, rgba(0,0,0,0.75), rgba(0,0,0,0.95))`;

  const progress = interpolate(frame, [0, fps * 12], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ background: '#0D0D12' }}>
      <AbsoluteFill style={{ backgroundImage: vignette }} />

      {/* top floating island */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 28,
          transform: 'translateX(-50%)',
          padding: '10px 14px',
          borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'rgba(250,248,245,0.06)',
          backdropFilter: 'blur(18px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
          display: 'flex',
          gap: 12,
          alignItems: 'center',
          color: 'rgba(255,255,255,0.86)',
        }}
      >
        <div style={{ fontFamily: 'Inter, system-ui', fontWeight: 700 }}>Vibecoding 16</div>
        <div style={{ fontFamily: 'Inter, system-ui', fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>
          Plan · Recursos · Ejemplos
        </div>
        <div
          style={{
            marginLeft: 10,
            padding: '8px 12px',
            borderRadius: 999,
            background: champagne,
            color: '#0D0D12',
            fontFamily: 'Inter, system-ui',
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          Empezar
        </div>
      </div>

      <div style={{ position: 'absolute', left: 76, top: 140, right: 76 }}>
        <Title line1="De 0 a pro" line2="con producto real" at={10} />
        <div
          style={{
            marginTop: 22,
            maxWidth: 860,
            fontFamily: 'Inter, system-ui',
            fontSize: 22,
            lineHeight: 1.35,
            color: 'rgba(255,255,255,0.74)',
            opacity: interpolate(frame, [22, 40], [0, 1], { extrapolateRight: 'clamp' }),
          }}
        >
          Un demo corto del look & feel: isla flotante, micro‑UI cards, manifiesto y progreso por clase.
        </div>
      </div>

      <Pill label="navbar morph" x={90} y={420} at={55} />
      <Pill label="micro‑UI cards" x={90} y={480} at={65} />
      <Pill label="manifesto reveal" x={90} y={540} at={75} />
      <Pill label="progress por clase" x={90} y={600} at={85} />

      {/* progress line */}
      <div
        style={{
          position: 'absolute',
          left: 76,
          right: 76,
          bottom: 38,
          height: 6,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.10)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress * 100}%`,
            background: champagne,
          }}
        />
      </div>

      {/* subtle grain */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.07,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27700%27 height=%27700%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27700%27 height=%27700%27 filter=%27url(%23n)%27 opacity=%270.55%27/%3E%3C/svg%3E")',
        }}
      />
    </AbsoluteFill>
  );
};
