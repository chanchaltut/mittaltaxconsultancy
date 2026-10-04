import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { TEAM, BRAND } from '../utils/constants';

// Professional business illustration SVG
const ProfessionalIllustration = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 p-6">
    <svg
      viewBox="0 0 300 320"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-h-72 drop-shadow-md"
      aria-hidden="true"
    >
      {/* Background dots */}
      <g fill="#cbd5e1" opacity="0.3">
        <circle cx="5" cy="10" r="2"/><circle cx="35" cy="10" r="2"/><circle cx="65" cy="10" r="2"/>
        <circle cx="95" cy="10" r="2"/><circle cx="125" cy="10" r="2"/><circle cx="155" cy="10" r="2"/>
        <circle cx="185" cy="10" r="2"/><circle cx="215" cy="10" r="2"/><circle cx="245" cy="10" r="2"/>
        <circle cx="275" cy="10" r="2"/>
        <circle cx="5" cy="65" r="2"/><circle cx="35" cy="65" r="2"/><circle cx="65" cy="65" r="2"/>
        <circle cx="95" cy="65" r="2"/><circle cx="125" cy="65" r="2"/><circle cx="155" cy="65" r="2"/>
        <circle cx="185" cy="65" r="2"/><circle cx="215" cy="65" r="2"/><circle cx="245" cy="65" r="2"/>
        <circle cx="275" cy="65" r="2"/>
        <circle cx="5" cy="120" r="2"/><circle cx="35" cy="120" r="2"/><circle cx="65" cy="120" r="2"/>
        <circle cx="95" cy="120" r="2"/><circle cx="125" cy="120" r="2"/>
        <circle cx="215" cy="120" r="2"/><circle cx="245" cy="120" r="2"/>
        <circle cx="275" cy="120" r="2"/>
      </g>

      {/* Clipboard / Document */}
      <rect x="30" y="140" width="70" height="90" rx="6" fill="#dbeafe"/>
      <rect x="30" y="140" width="70" height="14" rx="6" fill="#E31937" opacity="0.7"/>
      <rect x="36" y="164" width="45" height="4" rx="2" fill="#E31937" opacity="0.5"/>
      <rect x="36" y="174" width="50" height="4" rx="2" fill="#E31937" opacity="0.4"/>
      <rect x="36" y="184" width="38" height="4" rx="2" fill="#E31937" opacity="0.3"/>
      <rect x="36" y="194" width="42" height="4" rx="2" fill="#E31937" opacity="0.3"/>
      <circle cx="76" cy="214" r="11" fill="#16a34a"/>
      <polyline points="70,214 74,218 82,208" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Calculator */}
      <rect x="198" y="135" width="68" height="105" rx="8" fill="#C01530"/>
      <rect x="206" y="143" width="52" height="30" rx="4" fill="#bfdbfe"/>
      <text x="232" y="163" textAnchor="middle" fill="#C01530" fontSize="13" fontWeight="bold">₹ TAX</text>
      <rect x="208" y="180" width="12" height="10" rx="2" fill="#60a5fa"/>
      <rect x="224" y="180" width="12" height="10" rx="2" fill="#60a5fa"/>
      <rect x="240" y="180" width="12" height="10" rx="2" fill="#60a5fa"/>
      <rect x="208" y="194" width="12" height="10" rx="2" fill="#93c5fd"/>
      <rect x="224" y="194" width="12" height="10" rx="2" fill="#93c5fd"/>
      <rect x="240" y="194" width="12" height="10" rx="2" fill="#93c5fd"/>
      <rect x="208" y="208" width="12" height="10" rx="2" fill="#bfdbfe"/>
      <rect x="224" y="208" width="12" height="10" rx="2" fill="#bfdbfe"/>
      <rect x="240" y="208" width="28" height="10" rx="2" fill="#E31937"/>

      {/* Magnifying glass */}
      <circle cx="172" cy="232" r="24" fill="none" stroke="#E31937" strokeWidth="6"/>
      <circle cx="172" cy="232" r="14" fill="#eff6ff"/>
      <line x1="189" y1="249" x2="204" y2="264" stroke="#E31937" strokeWidth="7" strokeLinecap="round"/>

      {/* Pencil */}
      <g transform="rotate(-22, 150, 130)">
        <rect x="146" y="108" width="9" height="48" rx="2" fill="#f59e0b"/>
        <polygon points="146,156 155,156 150.5,168" fill="#fde68a"/>
        <rect x="146" y="108" width="9" height="8" rx="2" fill="#d97706"/>
      </g>
      <g transform="rotate(-8, 162, 126)">
        <rect x="158" y="104" width="9" height="48" rx="2" fill="#475569"/>
        <polygon points="158,152 167,152 162.5,164" fill="#94a3b8"/>
        <rect x="158" y="104" width="9" height="8" rx="2" fill="#334155"/>
      </g>

      {/* Person shadow */}
      <ellipse cx="152" cy="308" rx="52" ry="14" fill="#1e3a5f" opacity="0.12"/>

      {/* Jacket / body */}
      <path d="M108 208 Q152 225 196 208 L202 298 L102 298 Z" fill="#1e3a5f"/>
      {/* White shirt */}
      <path d="M136 208 L152 224 L168 208 L162 298 L142 298 Z" fill="#f1f5f9"/>
      {/* Tie */}
      <path d="M149 218 L155 218 L158 262 L152 268 L146 262 Z" fill="#dc2626"/>
      <path d="M149 218 L152 214 L155 218 L152 224 Z" fill="#b91c1c"/>

      {/* Arms */}
      <path d="M108 214 Q84 246 87 278" stroke="#f5d0a9" strokeWidth="22" strokeLinecap="round" fill="none"/>
      <path d="M196 214 Q220 246 217 278" stroke="#f5d0a9" strokeWidth="22" strokeLinecap="round" fill="none"/>
      {/* Hands */}
      <circle cx="88" cy="280" r="13" fill="#f5d0a9"/>
      <circle cx="216" cy="280" r="13" fill="#f5d0a9"/>

      {/* Neck */}
      <rect x="142" y="148" width="20" height="30" rx="7" fill="#f5d0a9"/>

      {/* Head */}
      <ellipse cx="152" cy="118" rx="40" ry="44" fill="#f5d0a9"/>

      {/* Hair */}
      <path d="M112 106 Q116 66 152 64 Q188 66 192 106 Q180 84 152 84 Q124 84 112 106 Z" fill="#3d2b1f"/>
      <path d="M112 106 Q110 90 114 78" stroke="#3d2b1f" strokeWidth="6" strokeLinecap="round" fill="none"/>
      <path d="M192 106 Q194 90 190 78" stroke="#3d2b1f" strokeWidth="6" strokeLinecap="round" fill="none"/>

      {/* Glasses */}
      <rect x="126" y="112" width="24" height="16" rx="5" fill="none" stroke="#3d2b1f" strokeWidth="2.5"/>
      <rect x="154" y="112" width="24" height="16" rx="5" fill="none" stroke="#3d2b1f" strokeWidth="2.5"/>
      <line x1="150" y1="120" x2="154" y2="120" stroke="#3d2b1f" strokeWidth="2"/>
      <line x1="123" y1="120" x2="118" y2="118" stroke="#3d2b1f" strokeWidth="2"/>
      <line x1="178" y1="120" x2="183" y2="118" stroke="#3d2b1f" strokeWidth="2"/>
      {/* Lens tint */}
      <rect x="127" y="113" width="22" height="14" rx="4" fill="#93c5fd" opacity="0.25"/>
      <rect x="155" y="113" width="22" height="14" rx="4" fill="#93c5fd" opacity="0.25"/>

      {/* Eyes */}
      <circle cx="138" cy="120" r="4" fill="white"/>
      <circle cx="166" cy="120" r="4" fill="white"/>
      <circle cx="139" cy="120" r="2" fill="#3d2b1f"/>
      <circle cx="167" cy="120" r="2" fill="#3d2b1f"/>

      {/* Nose */}
      <path d="M150 128 Q152 133 154 128" stroke="#c8a07a" strokeWidth="1.5" fill="none"/>
      {/* Smile */}
      <path d="M143 138 Q152 145 161 138" stroke="#c8a07a" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Lapels */}
      <path d="M136 208 L122 240 L135 232 Z" fill="#0f2d5e"/>
      <path d="M168 208 L182 240 L169 232 Z" fill="#0f2d5e"/>
    </svg>
  </div>
);

const founder = TEAM[0];

const TeamSection = () => {
  return (
    <section
      className="bg-[#FBFAF7] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
      aria-label="Our Team"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="section-tag">Our Team</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A132B] mt-3 mb-4 leading-tight">
            Meet Our <span className="text-[#E31937]">Founder</span>
          </h2>
          <p className="text-[#667085] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            A qualified professional with deep expertise across all areas of taxation, compliance, and corporate law.
          </p>
        </div>

        {/* Single centered Founder Card */}
        <div className="flex justify-center">
          <article className="bg-white border border-red-100 rounded-2xl overflow-hidden hover:border-[#E31937]/40 transition-all duration-300 hover:shadow-xl w-full max-w-md">

            {/* Professional Illustration */}
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <ProfessionalIllustration />
            </div>

            {/* Info */}
            <div className="p-6 sm:p-8 border-t-2 border-[#E31937]">
              <h3 className="text-[#0A132B] font-bold text-xl sm:text-2xl mb-1">{founder.name}</h3>
              <p className="text-[#E31937] text-sm font-semibold tracking-wide mb-2">{founder.role}</p>
              <p className="text-[#667085] text-sm leading-relaxed mb-5">{founder.expertise}</p>

              {/* Qualifications */}
              <div className="flex flex-wrap gap-2 mb-6">
                {founder.qualification && (
                  <span className="bg-[#FBFAF7] border border-red-100 text-[#667085] text-[11px] px-3 py-1 rounded-full">
                    {founder.qualification}
                  </span>
                )}
                {founder.experience && (
                  <span className="bg-[#eff6ff] border border-red-200 text-[#E31937] text-[11px] px-3 py-1 rounded-full font-medium">
                    {founder.experience} Experience
                  </span>
                )}
              </div>

              {/* Contact */}
              <div className="space-y-3 mb-6">
                <a
                  href={`tel:${founder.phone}`}
                  className="flex items-center gap-3 text-[#667085] hover:text-[#E31937] text-sm transition-colors min-h-[40px]"
                >
                  <FaPhone className="text-[#E31937] text-sm flex-shrink-0" />
                  <span>{founder.phone}</span>
                </a>
                <a
                  href={`mailto:${founder.email}`}
                  className="flex items-center gap-3 text-[#667085] hover:text-[#E31937] text-sm transition-colors min-h-[40px] break-all"
                >
                  <FaEnvelope className="text-[#E31937] text-sm flex-shrink-0" />
                  <span>{founder.email}</span>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I want a free consultation with Mittal Tax Consultancy.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white py-3 px-4 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 min-h-[48px]"
                >
                  <FaWhatsapp className="text-base" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${founder.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#E31937] hover:bg-[#C01530] text-white py-3 px-4 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 min-h-[48px]"
                >
                  <FaPhone className="text-sm" />
                  Call Now
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
