import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { WHY_CHOOSE_US, BRAND } from '../utils/constants';

const whyFeatures = WHY_CHOOSE_US;

const ExpertCA = () => {
  return (
    <section
      className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden"
      aria-label="Why choose Mittal Tax Consultancy"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Content */}
          <div className="text-center lg:text-left">
            <div className="section-tag">Why Choose Us</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A132B] mt-3 mb-5 leading-tight">
              Why{' '}
              <span className="text-[#E31937]">Mittal Tax Consultancy</span>{' '}
              is India's Trusted Trusted Partner
            </h2>

            <p className="text-[#667085] text-sm sm:text-base leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              We combine ICAI-qualified expertise with a completely online, hassle-free delivery model.
              No office visits. No hidden fees. Just accurate, fast professional services — delivered where you are.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {whyFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-[#FBFAF7] border border-red-100 rounded-xl p-3 sm:p-4 text-left hover:border-[#E31937]/40 transition-colors duration-200"
                >
                  <i className={`text-xl sm:text-2xl flex-shrink-0 mt-0.5 text-red-600 ${feature.icon}`}></i>
                  <div>
                    <h4 className="text-[#0A132B] font-semibold text-sm mb-0.5">{feature.title}</h4>
                    <p className="text-[#667085] text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I want to get started with Mittal Tax Consultancy.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#E31937] hover:bg-[#C01530] text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 group min-h-[48px]"
              >
                GET STARTED
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-red-100 hover:border-[#E31937] text-[#0A132B] hover:text-[#E31937] px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 min-h-[48px]"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          {/* RIGHT — Visual */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden image-zoom-container shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop"
                alt="qualified professional working on tax documents"
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover image-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm border border-red-100 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E31937] rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-trophy-line text-2xl text-white"></i>
                </div>
                <div>
                  <p className="text-[#0A132B] font-bold text-sm sm:text-base">Mittal Tax Consultancy — Expert Professional Services</p>
                  <p className="text-[#667085] text-xs mt-0.5">Serving 10000+ clients across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertCA;
