import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PARENT_SERVICES, BRAND } from '../utils/constants';

// ── WhatsApp SVG Icon ──────────────────────────────────────────
const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ── Build flat search index from all subcategories ─────────────
const buildSearchIndex = () => {
  const index = [];
  PARENT_SERVICES.forEach((parent) => {
    // Include parent itself
    index.push({
      type: 'parent',
      parentId: parent.id,
      parentTitle: parent.title,
      name: parent.title,
      price: parent.startingPrice,
      desc: parent.shortDesc,
      whatsappMsg: parent.whatsappMsg,
    });
    // Include each subcategory
    parent.subcategories.forEach((sub) => {
      index.push({
        type: 'sub',
        parentId: parent.id,
        parentTitle: parent.title,
        name: sub.name,
        price: sub.price,
        popular: sub.popular,
        desc: parent.shortDesc,
        whatsappMsg: `Hi! I need "${sub.name}" service from Mittal Tax Consultancy. Please guide me.`,
      });
    });
  });
  return index;
};

const SEARCH_INDEX = buildSearchIndex();

// ── Service Card (expandable) ──────────────────────────────────
const ServiceCard = ({ service, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen || false);

  return (
    <article className="bg-white border border-red-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-900/8 hover:border-red-200">
      {/* Card Header — clickable to toggle subcategories */}
      <button
        className="w-full text-left p-5 sm:p-6 flex items-center gap-4 group"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`${service.title} — click to ${open ? 'collapse' : 'expand'} subcategories`}
      >
        {/* Emoji Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E31937]/10 flex items-center justify-center flex-shrink-0 text-2xl sm:text-3xl leading-none">
          {service.emoji}
        </div>

        {/* Title block */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <h3 className="text-[#0A132B] font-bold text-base sm:text-lg leading-tight">
              {service.title}
            </h3>
            {service.badge && (
              <span className="inline-flex items-center gap-1 bg-[#E31937]/10 text-[#E31937] border border-red-200 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                <i className="ri-fire-line" />
                {service.badge}
              </span>
            )}
          </div>
          <p className="text-[#667085] text-xs sm:text-sm leading-snug hidden sm:block">{service.shortDesc}</p>
        </div>

        {/* Price + Arrow */}
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <span className="text-[10px] text-[#667085] font-medium">Starting from</span>
          <span className="text-[#E31937] font-extrabold text-base sm:text-lg leading-none">{service.startingPrice}</span>
          <i className={`ri-arrow-${open ? 'up' : 'down'}-s-line text-[#667085] text-lg mt-1 group-hover:text-[#E31937] transition-colors`} />
        </div>
      </button>

      {/* Subcategories accordion */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-red-100 px-5 sm:px-6 pt-4 pb-5">
          <p className="text-[#667085] text-xs sm:text-sm mb-4 sm:hidden leading-snug">{service.shortDesc}</p>
          <p className="text-[#0A132B] text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
            <i className="ri-list-check-2 text-[#E31937]" />
            All Services — Prices Excluding Govt Fees (if any)
          </p>
          <ul className="space-y-2">
            {service.subcategories.map((sub, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-3 bg-[#FBFAF7] border border-red-100 rounded-xl px-3 sm:px-4 py-2.5 hover:border-[#E31937]/40 hover:bg-red-50/30 transition-all group/item"
              >
                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                  <i className="ri-checkbox-circle-fill text-[#E31937] text-base flex-shrink-0" />
                  <span className="text-[#0A132B] text-xs sm:text-sm font-medium leading-snug truncate">
                    {sub.name}
                  </span>
                  {sub.popular && (
                    <span className="hidden sm:inline text-[9px] bg-[#FF9933]/15 text-[#FF9933] border border-[#FF9933]/30 font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                      Popular
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-[#E31937] font-bold text-xs whitespace-nowrap">{sub.price}</span>
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                      `Hi! I need "${sub.name}" service from Mittal Tax Consultancy. Please guide me.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-[#25d366] hover:bg-[#20b858] text-white px-2 sm:px-3 py-1.5 rounded-lg font-semibold text-[10px] sm:text-xs transition-all duration-200 whitespace-nowrap opacity-80 group-hover/item:opacity-100"
                    aria-label={`Enquire about ${sub.name}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <WaIcon />
                    <span className="hidden sm:inline">Enquire</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>

          {/* Enquire about full service */}
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(service.whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full flex items-center justify-center gap-2 bg-[#E31937] hover:bg-[#C01530] text-white py-3 px-5 rounded-xl font-bold text-sm transition-all duration-200 min-h-[46px]"
          >
            <WaIcon />
            Enquire about {service.shortTitle || service.title}
          </a>
        </div>
      </div>
    </article>
  );
};

// ── Search Result Item ─────────────────────────────────────────
const SearchResultItem = ({ result }) => (
  <li className="flex items-center justify-between gap-3 bg-white border border-red-100 rounded-xl px-4 py-3 hover:border-[#E31937]/40 hover:bg-red-50/30 transition-all group">
    <div className="flex-1 min-w-0">
      <p className="text-[#0A132B] font-semibold text-sm leading-snug">{result.name}</p>
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
        className="flex items-center gap-1.5 bg-[#25d366] hover:bg-[#20b858] text-white px-3 py-1.5 rounded-lg font-semibold text-xs transition-all duration-200 whitespace-nowrap"
      >
        <WaIcon />
        Enquire
      </a>
    </div>
  </li>
);

// ── Main Component ─────────────────────────────────────────────
const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const sectionRef = useRef(null);
  const searchInputRef = useRef(null);
  const debounceTimer = useRef(null);

  // ── Debounce search input (300ms)
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

  // ── Execute search on debounced query
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const q = debouncedQuery.toLowerCase();
    const results = SEARCH_INDEX.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.parentTitle.toLowerCase().includes(q) ||
        (item.desc && item.desc.toLowerCase().includes(q))
    ).slice(0, 20);
    setSearchResults(results);
  }, [debouncedQuery]);

  // ── Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.05 }
    );
    const cards = sectionRef.current?.querySelectorAll('.reveal');
    cards?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  // ── Filter PARENT_SERVICES by tab category
  const filteredServices =
    activeCategory === 'All'
      ? PARENT_SERVICES
      : PARENT_SERVICES.filter((s) => s.category === activeCategory);

  const categories = ['All', ...PARENT_SERVICES.map((s) => s.category)];
  const isSearchActive = debouncedQuery.trim().length > 0;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-[#FBFAF7] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
      aria-label="Professional Services"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="section-tag">Our Services</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A132B] mt-3 mb-4 leading-tight">
            Complete Professional <span className="text-[#E31937]">Services</span>
          </h2>
          <p className="text-[#667085] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            12 categories · 100+ services · all delivered 100% online across India.
            Transparent pricing · Fast turnaround · Open 24 Hours.
          </p>
          <p className="mt-2 text-[#E31937] text-xs font-semibold">
            * All prices are "Starting from" — Govt fees (if any) charged at actuals, separately.
          </p>
        </div>

        {/* ── SEARCH BAR (with debouncing) ── */}
        <div className="relative max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="relative">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-[#667085] text-lg pointer-events-none" />
            <input
              ref={searchInputRef}
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search any service — GST, ITR, Trademark, MSME, PF..."
              className="w-full bg-white border border-red-100 focus:border-[#E31937] focus:ring-2 focus:ring-[#E31937]/20 rounded-2xl pl-11 pr-4 py-4 text-[#0A132B] text-sm placeholder-[#667085] outline-none transition-all duration-200 shadow-sm"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#667085]/20 hover:bg-[#E31937]/20 flex items-center justify-center text-[#667085] hover:text-[#E31937] transition-colors"
                aria-label="Clear search"
              >
                <i className="ri-close-line text-sm" />
              </button>
            )}
          </div>

          {/* Search Results Dropdown */}
          {isSearchActive && (
            <div className="absolute top-full left-0 right-0 z-30 mt-2 bg-white border border-red-100 rounded-2xl shadow-xl shadow-red-900/10 overflow-hidden">
              {searchResults.length > 0 ? (
                <>
                  <div className="px-4 pt-3 pb-2">
                    <p className="text-[#667085] text-xs font-semibold">
                      {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "<span className="text-[#E31937]">{debouncedQuery}</span>"
                    </p>
                  </div>
                  <ul className="px-3 pb-3 space-y-1.5 max-h-80 overflow-y-auto">
                    {searchResults.map((result, i) => (
                      <SearchResultItem key={i} result={result} />
                    ))}
                  </ul>
                </>
              ) : (
                <div className="px-4 py-6 text-center">
                  <i className="ri-search-line text-3xl text-[#667085]/40 block mb-2" />
                  <p className="text-[#667085] text-sm">No results for "<span className="text-[#E31937] font-semibold">{debouncedQuery}</span>"</p>
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hi! I'm looking for "${debouncedQuery}" service. Can you help?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 bg-[#25d366] text-white px-4 py-2 rounded-full font-bold text-xs transition-all"
                  >
                    <WaIcon />
                    Ask on WhatsApp
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── CATEGORY FILTER TABS ── */}
        <div
          className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none"
          role="tablist"
          aria-label="Service categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap min-h-[38px] ${
                activeCategory === cat
                  ? 'bg-[#E31937] text-white shadow-md'
                  : 'bg-white text-[#0A132B] border border-red-100 hover:border-[#E31937] hover:text-[#E31937]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── SERVICE CARDS GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="reveal"
              style={{ transitionDelay: `${(index % 4) * 0.06}s` }}
            >
              <ServiceCard service={service} defaultOpen={index === 0 && activeCategory === 'All'} />
            </div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-[#667085] text-sm mb-4">Can't find what you're looking for? Our experts are available 24×7.</p>
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent('Hi! I need help choosing the right professional service from Mittal Tax Consultancy.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E31937] hover:bg-[#C01530] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 min-h-[48px]"
          >
            <WaIcon />
            Talk to Our Tax Expert
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
