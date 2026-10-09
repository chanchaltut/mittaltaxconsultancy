import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PARENT_SERVICES, BRAND } from '../utils/constants';

// Icon map — one Remix icon per service category (no emojis)
const CATEGORY_ICONS = {
  'gst':          'ri-file-list-3-line',
  'itr':          'ri-file-chart-line',
  'tds':          'ri-percent-line',
  'legal':        'ri-scales-3-line',
  'pf-esic':      'ri-shield-user-line',
  'trademark':    'ri-service-line',
  'incorporation':'ri-building-4-line',
  'mca':          'ri-government-line',
  'import-export':'ri-ship-line',
  'accounting':   'ri-book-2-line',
  'msme':         'ri-store-3-line',
  'fssai':        'ri-restaurant-line',
};

// ── Build flat search index ─────────────────────────────────────
const buildSearchIndex = () => {
  const index = [];
  PARENT_SERVICES.forEach((parent) => {
    index.push({
      type: 'parent',
      parentId: parent.id,
      parentTitle: parent.title,
      name: parent.title,
      price: parent.startingPrice,
      desc: parent.shortDesc,
      whatsappMsg: parent.whatsappMsg,
    });
    parent.subcategories.forEach((sub) => {
      index.push({
        type: 'sub',
        parentId: parent.id,
        parentTitle: parent.title,
        name: sub.name,
        price: sub.price,
        popular: sub.popular,
        desc: parent.shortDesc,
        whatsappMsg: `Hi! I need "${sub.name}" from Mittal Tax Consultancy. Please guide me.`,
      });
    });
  });
  return index;
};

const SEARCH_INDEX = buildSearchIndex();

// ── Service Card ────────────────────────────────────────────────
const ServiceCard = ({ service }) => {
  const [open, setOpen] = useState(false); // ALL closed by default
  const icon = CATEGORY_ICONS[service.id] || 'ri-briefcase-4-line';

  return (
    <article className="bg-white border border-red-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-red-900/8 hover:border-red-200">
      {/* Card Header */}
      <button
        className="w-full text-left p-4 sm:p-5 flex items-center gap-3 group"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {/* Icon */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#E31937]/10 flex items-center justify-center flex-shrink-0">
          <i className={`${icon} text-[#E31937] text-lg sm:text-xl`} />
        </div>

        {/* Title block */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
            <h3 className="text-[#0A132B] font-bold text-sm sm:text-base leading-tight">{service.title}</h3>
            {service.badge && (
              <span className="inline-flex items-center gap-0.5 bg-[#E31937]/10 text-[#E31937] border border-red-200 text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap">
                <i className="ri-fire-line" />{service.badge}
              </span>
            )}
          </div>
          <p className="text-[#E31937] font-bold text-xs">Starting from {service.startingPrice}</p>
        </div>

        {/* Arrow */}
        <i className={`ri-arrow-${open ? 'up' : 'down'}-s-line text-[#667085] text-xl flex-shrink-0 group-hover:text-[#E31937] transition-colors`} />
      </button>

      {/* Subcategories — smooth accordion */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-red-100 px-3 sm:px-4 pt-3 pb-4">
          <p className="text-[#667085] text-xs mb-3 leading-snug">{service.shortDesc}</p>
          <p className="text-[#0A132B] text-[10px] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i className="ri-list-check-2 text-[#E31937]" />
            All Services — Excl. Govt Fees
          </p>

          <ul className="space-y-1.5">
            {service.subcategories.map((sub, i) => (
              <li key={i} className="flex items-center gap-2 bg-[#FBFAF7] border border-red-100 rounded-lg px-2.5 py-2 hover:border-[#E31937]/40 transition-all group/item">
                <i className="ri-checkbox-circle-fill text-[#E31937] text-sm flex-shrink-0" />
                {/* Name — wraps on mobile, no truncation */}
                <span className="text-[#0A132B] text-xs font-medium flex-1 leading-snug break-words min-w-0">{sub.name}</span>
                {/* Price + WA — stacked on mobile */}
                <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-1">
                  <span className="text-[#E31937] font-bold text-[10px] whitespace-nowrap text-right">{sub.price}</span>
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hi! I need "${sub.name}" from Mittal Tax Consultancy. Please guide me.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 bg-[#25d366] hover:bg-[#20b858] text-white px-2 py-1 rounded-md font-semibold text-[10px] transition-all whitespace-nowrap"
                    aria-label={`Enquire about ${sub.name}`}
                  >
                    <i className="ri-whatsapp-line text-xs" />
                    Enquire
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(service.whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full flex items-center justify-center gap-2 bg-[#E31937] hover:bg-[#C01530] text-white py-2.5 rounded-xl font-bold text-sm transition-all"
          >
            <i className="ri-whatsapp-line" />
            Enquire about {service.shortTitle || service.title}
          </a>
        </div>
      </div>
    </article>
  );
};

// ── Search Result Item ──────────────────────────────────────────
const SearchResultItem = ({ result }) => (
  <li className="flex flex-wrap items-center gap-2 bg-white border border-red-100 rounded-xl px-3 py-2.5 hover:border-[#E31937]/40 transition-all">
    <div className="flex-1 min-w-0">
      <p className="text-[#0A132B] font-semibold text-sm leading-snug break-words">{result.name}</p>
      {result.type === 'sub' && (
        <p className="text-[#667085] text-xs mt-0.5">Under: {result.parentTitle}</p>
      )}
    </div>
    <div className="flex items-center gap-2 flex-shrink-0">
      <span className="text-[#E31937] font-bold text-xs whitespace-nowrap">{result.price}</span>
      <a
        href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(result.whatsappMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 bg-[#25d366] hover:bg-[#20b858] text-white px-2.5 py-1.5 rounded-lg font-semibold text-xs transition-all whitespace-nowrap"
      >
        <i className="ri-whatsapp-line" />
        Enquire
      </a>
    </div>
  </li>
);

// ── Main ServicesSection ────────────────────────────────────────
const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const sectionRef = useRef(null);
  const searchInputRef = useRef(null);
  const debounceTimer = useRef(null);

  // Debounce search input (300ms)
  const handleSearchChange = useCallback((e) => {
    const val = e.target.value;
    setSearchQuery(val);
    setIsSearching(true);
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setDebouncedQuery(val);
      setIsSearching(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (!debouncedQuery.trim()) { setSearchResults([]); return; }
    const q = debouncedQuery.toLowerCase();
    const results = SEARCH_INDEX.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.parentTitle.toLowerCase().includes(q) ||
        (item.desc && item.desc.toLowerCase().includes(q))
    ).slice(0, 20);
    setSearchResults(results);
  }, [debouncedQuery]);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    const cards = sectionRef.current?.querySelectorAll('.reveal');
    cards?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  const categories = ['All', ...PARENT_SERVICES.map((s) => s.category)];
  const filteredServices = activeCategory === 'All'
    ? PARENT_SERVICES
    : PARENT_SERVICES.filter((s) => s.category === activeCategory);

  const isSearchActive = debouncedQuery.trim().length > 0;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-[#FBFAF7] py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
      aria-label="Professional Services"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="section-tag">Our Services</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A132B] mt-3 mb-3 leading-tight">
            Complete Professional <span className="text-[#E31937]">Services</span>
          </h2>
          <p className="text-[#667085] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-1">
            12 categories · 100+ services · 100% online across India · Open 24 Hours
          </p>
          <p className="text-[#E31937] text-xs font-semibold">
            * All prices are "Starting from" — Govt fees charged at actuals, separately.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-7 sm:mb-9">
          <div className="relative">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-[#667085] text-lg pointer-events-none" />
            <input
              ref={searchInputRef}
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search — GST, ITR, Trademark, MSME, PF..."
              className="w-full bg-white border border-red-100 focus:border-[#E31937] focus:ring-2 focus:ring-[#E31937]/20 rounded-2xl pl-11 pr-10 py-3.5 text-[#0A132B] text-sm placeholder-[#667085] outline-none transition-all shadow-sm"
              aria-label="Search services"
            />
            {isSearching && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 border-2 border-[#E31937] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            {searchQuery && !isSearching && (
              <button
                onClick={() => { setSearchQuery(''); setDebouncedQuery(''); setSearchResults([]); searchInputRef.current?.focus(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#667085]/15 hover:bg-[#E31937]/20 flex items-center justify-center text-[#667085] hover:text-[#E31937] transition-colors"
                aria-label="Clear search"
              >
                <i className="ri-close-line text-sm" />
              </button>
            )}
          </div>

          {/* Search Results Dropdown */}
          {isSearchActive && (
            <div className="absolute top-full left-0 right-0 z-30 mt-2 bg-white border border-red-100 rounded-2xl shadow-xl overflow-hidden">
              {searchResults.length > 0 ? (
                <>
                  <div className="px-4 pt-3 pb-2">
                    <p className="text-[#667085] text-xs font-semibold">
                      {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for <span className="text-[#E31937]">"{debouncedQuery}"</span>
                    </p>
                  </div>
                  <ul className="px-3 pb-3 space-y-1.5 max-h-72 overflow-y-auto">
                    {searchResults.map((result, i) => <SearchResultItem key={i} result={result} />)}
                  </ul>
                </>
              ) : (
                <div className="px-4 py-5 text-center">
                  <i className="ri-search-line text-3xl text-[#667085]/40 block mb-2" />
                  <p className="text-[#667085] text-sm">No results for <span className="text-[#E31937] font-semibold">"{debouncedQuery}"</span></p>
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hi! I'm looking for "${debouncedQuery}" service. Can Mittal Tax Consultancy help?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 bg-[#25d366] text-white px-4 py-2 rounded-full font-bold text-xs"
                  >
                    <i className="ri-whatsapp-line" />
                    Ask on WhatsApp
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex gap-2 mb-7 overflow-x-auto pb-2 scrollbar-none" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`flex-shrink-0 px-3.5 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap min-h-[36px] ${
                activeCategory === cat
                  ? 'bg-[#E31937] text-white shadow-md'
                  : 'bg-white text-[#0A132B] border border-red-100 hover:border-[#E31937] hover:text-[#E31937]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards Grid — 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
          {filteredServices.map((service, index) => (
            <div key={service.id} className="reveal" style={{ transitionDelay: `${(index % 4) * 0.05}s` }}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-[#667085] text-sm mb-4">Can't find what you're looking for? Our experts are available 24×7.</p>
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent('Hi! I need help choosing the right professional service from Mittal Tax Consultancy.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E31937] hover:bg-[#C01530] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 min-h-[48px]"
          >
            <i className="ri-whatsapp-line text-base" />
            Talk to Our Tax Expert
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
