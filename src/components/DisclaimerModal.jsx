import React, { useState, useEffect } from 'react';
import { BRAND } from '../utils/constants';

const serviceItems = [
  { icon: 'ri-bar-chart-2-line',   label: 'Tax & GST Services' },
  { icon: 'ri-file-text-line',      label: 'Audit & Assurance' },
  { icon: 'ri-building-2-line',     label: 'Business Registration' },
  { icon: 'ri-award-line',          label: 'Certificates' },
  { icon: 'ri-file-chart-line',     label: 'Project Reports' },
  { icon: 'ri-whatsapp-line',       label: 'WhatsApp Support' },
];

const tagItems = ['Tax', 'GST', 'Audit', 'Business Registration', 'Project Reports', 'Certificates'];

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
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-300 ${
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

      {/* Modal */}
      <div
        className={`relative w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl border border-red-100 transition-all duration-300 ${
          animate ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        {/* Red top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#E31937] via-[#F5405E] to-[#E31937]" />

        {/* Header */}
        <div className="px-6 pt-5 pb-4 flex items-center justify-between border-b border-red-100">
          {/* Text Logo in modal */}
          <div className="flex items-center gap-1">
            <span className="text-[#E31937] font-black text-lg tracking-tight">Mittal</span>
            <span className="text-[#0A132B] font-black text-lg tracking-tight">&nbsp;Tax Consultancy</span>
          </div>
          <button
            onClick={dismiss}
            className="w-8 h-8 rounded-full bg-red-50 hover:bg-[#E31937]/20 flex items-center justify-center text-[#0A132B]/60 hover:text-[#0A132B] transition-all"
            aria-label="Close"
          >
            <i className="ri-close-line text-lg" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pt-5 pb-4">
          <h2 className="text-[#0A132B] font-bold text-2xl mb-1">
            Welcome to <span className="text-[#E31937]">Mittal Tax Consultancy</span>
          </h2>
          <p className="text-[#667085] text-sm mb-5">Your Trusted Financial Partner — Tax, Compliance &amp; Business Support</p>

          {/* Tagline card */}
          <div className="flex items-start gap-3 bg-red-50 rounded-xl p-4 mb-5 border border-red-100">
            <div className="w-10 h-10 rounded-full bg-[#E31937]/15 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i className="ri-briefcase-4-line text-[#E31937] text-base" />
            </div>
            <div>
              <p className="text-[#E31937] font-bold text-sm leading-snug mb-1">
                Your Business. Your Compliance. One Trusted Solution.
              </p>
              <p className="text-[#667085] text-xs leading-relaxed">
                Expert GST, ITR & TDS Filing, Company & MSME Registrations, NGO Accounting, Audits & Comprehensive Tax Advisory — delivered with accuracy and transparency.
              </p>
            </div>
          </div>

          {/* Service grid — 2×3 */}
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {serviceItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-red-50 rounded-xl px-3.5 py-3 border border-red-100 hover:border-[#E31937]/40 transition-colors"
              >
                <i className={`${item.icon} text-[#E31937] text-lg flex-shrink-0`} />
                <span className="text-[#0A132B] font-semibold text-[13px]">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <button
              onClick={dismiss}
              className="flex-1 flex items-center justify-center gap-2 bg-[#E31937] hover:bg-[#C01530] text-white py-3 px-4 rounded-full font-bold text-sm transition-all duration-200 min-h-[46px]"
            >
              <i className="ri-compass-3-line text-base" />
              Explore Services
            </button>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white py-3 px-4 rounded-full font-bold text-sm transition-all duration-200 min-h-[46px]"
            >
              <i className="ri-whatsapp-line text-base" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Tag strip at bottom */}
        <div className="border-t border-red-100 px-6 py-2.5 flex items-center justify-center gap-1.5 flex-wrap">
          {tagItems.map((tag, i) => (
            <React.Fragment key={i}>
              <span className="text-[#667085] text-[11px] font-medium">{tag}</span>
              {i < tagItems.length - 1 && (
                <span className="text-red-200 text-[10px]">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
