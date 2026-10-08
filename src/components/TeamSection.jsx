import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { TEAM, BRAND } from '../utils/constants';

// AI Generated Female Professional Illustration
import femaleProfessionalImg from "../assets/female-professional.jpg";

const ProfessionalIllustration = () => (
  <div className="w-full h-full bg-red-50 relative overflow-hidden flex items-end justify-center">
    <img
      src={femaleProfessionalImg}
      alt="Professional Female Tax Consultant"
      className="w-full h-full object-cover object-center"
    />
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
