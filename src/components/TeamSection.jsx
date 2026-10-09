import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { TEAM, BRAND } from '../utils/constants';

// AI Generated Female Professional Illustration
import femaleProfessionalImg from "../assets/female-professional.jpg";

const ProfessionalIllustration = () => (
  <div className="w-full h-full bg-red-50 relative overflow-hidden flex items-start justify-center">
    <img
      src={femaleProfessionalImg}
      alt="Professional Female Tax Consultant"
      className="w-full h-full object-cover object-top"
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
              <p className="text-[#667085] text-sm leading-relaxed mb-6">{founder.description}</p>

              {/* Qualifications */}
              <div className="flex flex-wrap gap-2">
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

              {/* Contact and CTA removed to keep the card clean */}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
