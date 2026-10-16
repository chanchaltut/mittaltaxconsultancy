import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { TESTIMONIALS } from '../utils/constants';

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Show 3 on desktop, 1 on mobile
  const getVisible = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(TESTIMONIALS[(current + i) % total]);
    }
    return result;
  };

  return (
    <section
      className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
      aria-label="Client testimonials"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="section-tag">Testimonials</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A132B] mt-3 mb-4 leading-tight">
            What Our <span className="text-[#C01530]">Clients Say</span>
          </h2>
          <p className="text-[#667085] text-sm sm:text-base">
            500+ satisfied clients across India trust MT Consultancy for all their CA needs.
          </p>
        </div>

        {/* Mobile: Single card */}
        <div className="md:hidden">
          <div className="bg-[#FBFAF7] border border-red-100 rounded-2xl p-6">
            <div className="flex gap-1 mb-3">
              {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                <FaStar key={i} className="text-[#C01530] text-sm" />
              ))}
            </div>
            <p className="text-[#667085] text-sm leading-relaxed mb-5 italic">
              "{TESTIMONIALS[current].text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C01530] text-white rounded-full flex items-center justify-center font-extrabold text-lg flex-shrink-0">
                {TESTIMONIALS[current].name[0]}
              </div>
              <div>
                <p className="text-[#0A132B] font-semibold text-sm">{TESTIMONIALS[current].name}</p>
                <p className="text-[#667085] text-xs">{TESTIMONIALS[current].role} · {TESTIMONIALS[current].city}</p>
              </div>
            </div>
          </div>
          {/* Mobile nav */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button onClick={prev} className="w-9 h-9 rounded-full bg-[#FBFAF7] border border-red-100 text-[#0A132B] hover:border-[#C01530] hover:text-[#9E0E25] flex items-center justify-center transition-colors no-min-h !min-h-0 min-h-0 p-0" aria-label="Previous">
              <FaChevronLeft className="text-xs" />
            </button>
            <span className="text-[#667085] text-xs font-semibold">{current + 1} / {total}</span>
            <button onClick={next} className="w-9 h-9 rounded-full bg-[#FBFAF7] border border-red-100 text-[#0A132B] hover:border-[#C01530] hover:text-[#9E0E25] flex items-center justify-center transition-colors no-min-h !min-h-0 min-h-0 p-0" aria-label="Next">
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-6">
            {getVisible().map((testimonial, i) => (
              <div
                key={`${testimonial.id}-${i}`}
                className={`bg-[#FBFAF7] border rounded-2xl p-6 transition-all duration-300 ${
                  i === 0 ? 'border-[#C01530]/40 shadow-lg' : 'border-red-100'
                }`}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <FaStar key={j} className="text-[#C01530] text-sm" />
                  ))}
                </div>
                <p className="text-[#667085] text-sm leading-relaxed mb-5 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#C01530] text-white rounded-full flex items-center justify-center font-extrabold text-lg flex-shrink-0">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="text-[#0A132B] font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-[#667085] text-xs">{testimonial.role} · {testimonial.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop nav */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-9 h-9 rounded-full bg-[#FBFAF7] border border-red-100 text-[#0A132B] hover:border-[#C01530] hover:text-[#9E0E25] flex items-center justify-center transition-colors no-min-h !min-h-0 min-h-0 p-0" aria-label="Previous testimonials">
              <FaChevronLeft className="text-xs" />
            </button>
            <div className="flex gap-1.5 items-center">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 no-min-h !min-h-0 min-h-0 p-0 block cursor-pointer ${
                    i === current
                      ? 'bg-[#C01530] border border-[#C01530] shadow-xs'
                      : 'bg-white border border-[#C01530]/40 hover:border-[#C01530] hover:scale-110'
                  }`}
                  style={{
                    minHeight: 'unset',
                    height: '5px',
                    width: i === current ? '20px' : '5px'
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-9 h-9 rounded-full bg-[#FBFAF7] border border-red-100 text-[#0A132B] hover:border-[#C01530] hover:text-[#9E0E25] flex items-center justify-center transition-colors no-min-h !min-h-0 min-h-0 p-0" aria-label="Next testimonials">
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>

        {/* Rating summary */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-[#FBFAF7] border border-red-100 rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#C01530] text-sm" />
              ))}
            </div>
            <span className="text-[#0A132B] font-bold">4.2/5</span>
            <span className="text-[#667085] text-sm">from 500+ clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
