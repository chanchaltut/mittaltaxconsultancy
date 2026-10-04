import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FAQS, BRAND } from '../utils/constants';

const FAQSection = () => {
  const [openId, setOpenId] = useState(1); // First FAQ open by default

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section
      id="faq"
      className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
      aria-label="Frequently asked questions about professional services"
    >
      {/* FAQPage JSON-LD (inline for AEO — also in index.html globally) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        })
      }} />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="section-tag">FAQ</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A132B] mt-3 mb-4 leading-tight">
            Frequently Asked{' '}
            <span className="text-[#E31937]">Questions</span>
          </h2>
          <p className="text-[#667085] text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about our professional services, pricing, and process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4" role="list">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-[#FBFAF7] border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-red-300' : 'border-red-100 hover:border-red-100'
                }`}
                role="listitem"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 md:p-6 text-left min-h-[60px]"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className={`font-semibold text-sm sm:text-base leading-snug transition-colors ${
                    isOpen ? 'text-[#E31937]' : 'text-[#0A132B]'
                  }`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isOpen ? 'bg-[#E31937] text-white' : 'bg-white text-[#667085]'
                  }`}>
                    {isOpen
                      ? <FaChevronUp className="text-xs" />
                      : <FaChevronDown className="text-xs" />
                    }
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`faq-answer ${isOpen ? 'open' : ''}`}
                  aria-hidden={!isOpen}
                >
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 border-t border-red-100">
                    <p className="text-[#667085] text-sm sm:text-base leading-relaxed pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-[#667085] text-sm mb-4">Have more questions? Our professional team is ready to help.</p>
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I have a question about professional services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E31937] hover:bg-[#C01530] text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 min-h-[48px]"
          >
            <i className="ri-whatsapp-line mr-2"></i> Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
