import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaArrowUp } from 'react-icons/fa';
import { BRAND } from '../utils/constants';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ═══ FLOATING WHATSAPP BUTTON (BOTTOM-LEFT) ═══ */}
      <aside aria-label="WhatsApp quick chat" className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-50">
        <a
          href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent('Hi! I want to chat with MT Consultancy.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-[#25d366] hover:bg-[#20b858] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] h-12 w-12 sm:h-14 sm:w-14 sm:hover:w-auto p-0 cursor-pointer overflow-hidden"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle pulse / ping */}
          <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-25 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />

          {/* WhatsApp Icon Circle (Pinned Left) */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0">
            <FaWhatsapp className="text-2xl sm:text-[26px]" />
          </div>

          {/* Text sliding out from left towards right (Desktop only) — Slow, smooth transition */}
          <div className="hidden sm:flex items-center overflow-hidden max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pr-5 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] whitespace-nowrap">
            <span className="font-bold text-sm tracking-wide">WhatsApp Us</span>
          </div>
        </a>
      </aside>

      {/* ═══ FLOATING CALL BUTTON (BOTTOM-RIGHT) ═══ */}
      <aside aria-label="Phone quick call" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50">
        <a
          href={`tel:${BRAND.phone}`}
          className="group flex flex-row-reverse items-center bg-[#C01530] hover:bg-[#9E0E25] text-white rounded-full shadow-[0_4px_20px_rgba(192,21,48,0.35)] transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] h-12 w-12 sm:h-14 sm:w-14 sm:hover:w-auto p-0 cursor-pointer overflow-hidden"
          aria-label={`Call ${BRAND.phone}`}
        >
          {/* Subtle pulse / ping */}
          <span className="absolute inset-0 rounded-full bg-[#C01530] animate-ping opacity-25 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />

          {/* Call Icon Circle (Pinned Right) */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0">
            <FaPhone className="text-lg sm:text-xl" />
          </div>

          {/* Text sliding out from right towards left (Desktop only) — Slow, smooth transition */}
          <div className="hidden sm:flex items-center overflow-hidden max-w-0 opacity-0 group-hover:max-w-[240px] group-hover:opacity-100 group-hover:pl-5 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] whitespace-nowrap">
            <span className="font-bold text-sm tracking-wide">Call: {BRAND.phone}</span>
          </div>
        </a>
      </aside>

      {/* ═══ SCROLL TO TOP BUTTON (ABOVE CALL BUTTON) ═══ */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-red-100 hover:border-[#C01530] text-[#0A132B] hover:text-[#9E0E25] flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
          showScrollTop ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xs sm:text-sm" />
      </button>
    </>
  );
};

export default FloatingActions;
