import React from 'react';
import { MARQUEE_ITEMS } from '../utils/constants';

// Thin top marquee strip — services only, no chunky elements
const Marquee = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] bg-[#FBFAF7] border-b border-red-100 py-1 overflow-hidden"
      aria-label="Services we offer"
      aria-hidden="true"
    >
      <div className="marquee-container">
        <div className="marquee-content">
          {items.map((item, i) => (
            <span
              key={i}
              className="flex-shrink-0 flex items-center gap-2 px-4 text-[#0A132B]/80 text-[11px] font-medium whitespace-nowrap"
            >
              <i className="ri-arrow-right-s-line text-[#E31937] text-xs" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
