import React, { useState, useEffect } from 'react';
import mtcLogo from '../assets/MTConsultancyLogo.webp';

/**
 * LogoLoader — Full-screen intro loader showing the real MTC logo.
 * The logo reveals left-to-right via a clip-path animation (like taxclue.in).
 * Only shows on first visit per session (sessionStorage gate).
 */
const LogoLoader = ({ onDone }) => {
  const [phase, setPhase] = useState('filling'); // 'filling' | 'hold' | 'fading'

  useEffect(() => {
    // Phase: filling (1.4s) → hold (0.5s) → fading (0.5s)
    const holdTimer = setTimeout(() => setPhase('fading'), 2200);
    const doneTimer = setTimeout(() => onDone(), 2700);
    return () => { clearTimeout(holdTimer); clearTimeout(doneTimer); };
  }, [onDone]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        transition: 'opacity 0.5s ease',
        opacity: phase === 'fading' ? 0 : 1,
        pointerEvents: phase === 'fading' ? 'none' : 'all',
      }}
      aria-label="Loading Mittal Tax Consultancy"
      role="status"
    >
      {/* Logo reveal container — clip-path animates left to right */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* Faded background (gray-tint base) */}
        <img
          src={mtcLogo}
          alt=""
          aria-hidden="true"
          style={{
            height: 72,
            width: 'auto',
            opacity: 0.12,
            display: 'block',
            filter: 'grayscale(1)',
          }}
        />
        {/* Animated reveal overlay */}
        <img
          src={mtcLogo}
          alt="Mittal Tax Consultancy"
          style={{
            height: 72,
            width: 'auto',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'block',
            clipPath: phase === 'filling' ? 'inset(0 100% 0 0)' : 'inset(0 0% 0 0)',
            transition: phase === 'filling' ? 'clip-path 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.15s' : 'none',
          }}
        />
      </div>

      {/* Tagline */}
      <p
        style={{
          color: '#667085',
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: '0.04em',
          opacity: phase === 'filling' ? 0 : 1,
          transform: phase === 'filling' ? 'translateY(6px)' : 'translateY(0)',
          transition: 'opacity 0.5s ease 1.2s, transform 0.5s ease 1.2s',
        }}
      >
        Your Trusted Financial Partner
      </p>

      {/* Progress bar */}
      <div
        style={{
          width: 160,
          height: 2,
          background: '#f5d0d6',
          borderRadius: 99,
          overflow: 'hidden',
          position: 'absolute',
          bottom: 48,
        }}
      >
        <div
          style={{
            height: '100%',
            background: '#E31937',
            borderRadius: 99,
            width: phase === 'filling' ? '0%' : '100%',
            transition: phase === 'filling' ? 'width 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s' : 'none',
          }}
        />
      </div>
    </div>
  );
};

export default LogoLoader;
