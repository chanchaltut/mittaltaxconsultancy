import React, { useState, useEffect } from 'react';
import { BRAND } from '../utils/constants';
import mtcLogo from '../assets/MTConsultancyLogo.webp';

const serviceItems = [
  { icon: 'ri-receipt-line',        label: 'GST Filing' },
  { icon: 'ri-file-chart-line',     label: 'ITR Filing' },
  { icon: 'ri-building-4-line',     label: 'Incorporation' },
  { icon: 'ri-percent-line',        label: 'TDS Returns' },
  { icon: 'ri-store-3-line',        label: 'MSME / Udyam' },
  { icon: 'ri-scales-3-line',       label: 'Legal Services' },
];

const DisclaimerModal = () => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('mtc_disclaimer_v1');
    if (!dismissed) {
      const timer = setTimeout(() => {
        setShow(true);
        setTimeout(() => setAnimate(true), 50);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setAnimate(false);
    setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('mtc_disclaimer_v1', '1');
    }, 300);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 ${
        animate ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Mittal Tax Consultancy"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal — capped at 80vh so close button is always reachable */}
      <div
        className={`relative w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-red-100 transition-all duration-300 flex flex-col overflow-hidden ${
          animate ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
        style={{ maxHeight: '80vh' }}
      >
        {/* Red top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#E31937] via-[#F5405E] to-[#E31937] flex-shrink-0" />

        {/* Header */}
        <div className="px-4 pt-3 pb-3 flex items-center justify-between border-b border-red-100 flex-shrink-0">
          <img src={mtcLogo} alt="Mittal Tax Consultancy" className="h-7 sm:h-8 w-auto" />
          <button
            onClick={dismiss}
            className="w-8 h-8 rounded-full bg-red-50 hover:bg-[#E31937]/20 flex items-center justify-center text-[#0A132B]/60 hover:text-[#0A132B] transition-all"
            aria-label="Close"
          >
            <i className="ri-close-line text-lg" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-4 pt-4 pb-3">
          <h2 className="text-[#0A132B] font-bold text-lg sm:text-xl mb-0.5">
            Welcome to <span className="text-[#E31937]">Mittal Tax Consultancy</span>
          </h2>
          <p className="text-[#667085] text-xs mb-4">Your Trusted Financial Partner — Tax, Compliance &amp; Business Support</p>

          {/* Service grid — 2×3 */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {serviceItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-red-50 rounded-xl px-3 py-2.5 border border-red-100"
              >
                <i className={`${item.icon} text-[#E31937] text-base flex-shrink-0`} />
                <span className="text-[#0A132B] font-semibold text-xs">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-2.5">
            <button
              onClick={dismiss}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#E31937] hover:bg-[#C01530] text-white py-2.5 px-3 rounded-full font-bold text-xs transition-all duration-200"
            >
              <i className="ri-compass-3-line text-sm" />
              Explore Services
            </button>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#25d366] hover:bg-[#20b858] text-white py-2.5 px-3 rounded-full font-bold text-xs transition-all duration-200"
            >
              <i className="ri-whatsapp-line text-sm" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Footer tag strip */}
        <div className="border-t border-red-100 px-4 py-2 flex items-center justify-center gap-1.5 flex-wrap flex-shrink-0">
          {['GST', 'ITR', 'TDS', 'MSME', 'Trademark', 'FSSAI'].map((tag, i, arr) => (
            <React.Fragment key={i}>
              <span className="text-[#667085] text-[10px] font-medium">{tag}</span>
              {i < arr.length - 1 && <span className="text-red-200 text-[10px]">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
