import React, { useState, useEffect } from 'react';

/**
 * LogoLoader — Full-screen intro loader for Mittal Tax Consultancy.
 * The brand name fills left-to-right with red color, then fades out.
 * Only shows on the first visit per session (sessionStorage gate).
 */
const LogoLoader = ({ onDone }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Total time: 0.3s delay + 1.6s fill + 0.4s hold + 0.5s fade = ~2.8s
    const holdTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const doneTimer = setTimeout(() => {
      onDone();
    }, 3000);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className={`logo-loader-overlay${fadeOut ? ' fade-out' : ''}`}
      aria-label="Loading Mittal Tax Consultancy"
      role="status"
    >
      {/* Text logo with left-to-right fill */}
      <div className="logo-loader-text" aria-hidden="true">
        {/* Base (gray) layer */}
        Mittal Tax Consultancy
        {/* Red fill layer — animates left to right */}
        <span className="logo-fill" aria-hidden="true">Mittal Tax Consultancy</span>
      </div>

      {/* Progress bar */}
      <div className="logo-loader-bar">
        <div className="logo-loader-bar-fill" />
      </div>

      {/* Tagline */}
      <p className="logo-loader-tagline">Your Trusted Financial Partner</p>
    </div>
  );
};

export default LogoLoader;
