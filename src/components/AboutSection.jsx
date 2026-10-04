import React, { useEffect, useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { ABOUT, BRAND, STATS } from '../utils/constants';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const statsThree = STATS.slice(0, 3);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
      aria-label="About Mittal Tax Consultancy"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* LEFT — Image */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden image-zoom-container card-hover shadow-2xl">
                <img
                  src={ABOUT.image}
                  alt="Mittal Tax Consultancy Professional Team at work"
                  className="w-full h-[300px] sm:h-[380px] md:h-[420px] lg:h-[460px] object-cover image-zoom"
                  loading="lazy"
                />
              </div>

              {/* Stats overlay card */}
              <div className="relative lg:absolute lg:bottom-[-24px] lg:left-0 lg:right-0 mt-4 lg:mt-0 mx-0 lg:mx-4 bg-[#E31937] rounded-2xl p-5 sm:p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-4 divide-x divide-white/20">
                  {statsThree.map((stat, i) => (
                    <div key={i} className="text-center px-2">
                      <div className="text-white font-extrabold text-2xl sm:text-3xl leading-none">
                        {stat.number}{stat.suffix}
                      </div>
                      <div className="text-white/70 text-[10px] sm:text-xs font-semibold mt-1 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="reveal">
              <div className="section-tag">About Us</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A132B] mt-3 mb-5 leading-tight">
                About Mittal Tax{' '}
                <span className="text-[#E31937]">Consultancy</span>
              </h2>
            </div>

            <div className="reveal animation-delay-200">
              <p className="text-[#667085] text-sm sm:text-base leading-relaxed mb-3">
                Mittal Tax Consultancy is your <strong className="text-[#0A132B]">trusted financial partner</strong> — delivering expert compliance and accounting solutions with accuracy and transparency for individuals, startups, and growing businesses.
              </p>
              <p className="text-[#667085] text-sm sm:text-base leading-relaxed mb-6">
                We provide all professional services <strong className="text-[#0A132B]">100% online</strong> — GST, ITR & TDS filing, Company & MSME registrations, NGO Accounting & Audits, and Comprehensive Tax Advisory. Transparent pricing. Fast turnaround. Dedicated WhatsApp support — Open 24 Hours.
              </p>
            </div>

            {/* Highlights */}
            <ul className="reveal animation-delay-300 space-y-3 mb-8 text-left max-w-md mx-auto lg:mx-0">
              {ABOUT.highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#0A132B] text-sm sm:text-base">
                  <FaCheckCircle className="text-[#E31937] flex-shrink-0 text-lg" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="reveal animation-delay-400 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#E31937] hover:bg-[#C01530] text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 min-h-[48px]"
              >
                Book Free Consultation →
              </a>
              <a
                href={`tel:${BRAND.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-red-100 hover:border-[#E31937] text-[#0A132B] hover:text-[#E31937] px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 min-h-[48px]"
              >
                <><i className="ri-phone-line mr-2"></i> Call Us</>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
