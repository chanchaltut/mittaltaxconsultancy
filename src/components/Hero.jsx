import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import { HERO_SLIDES, BRAND } from '../utils/constants';

const trustBadges = [
  { icon: 'ri-trophy-line', text: 'Qualified Professionals' },
  { icon: 'ri-star-smile-line', text: '500+ Clients' },
  { icon: 'ri-flashlight-line', text: '5+ Years' },
  { icon: 'ri-global-line', text: '100% Online' },
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 6000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };
  const nextSlide = () => goToSlide((currentSlide + 1) % HERO_SLIDES.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  // Touch swipe
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
    touchStartX.current = null;
  };

  const handleCTA = (link) => {
    if (!link) return;
    if (link.startsWith('http') || link.startsWith('tel:') || link.startsWith('mailto:')) {
      window.open(link, link.startsWith('http') ? '_blank' : '_self');
    } else if (link.startsWith('/#')) {
      const sectionId = link.replace('/', '');
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      } else {
        const el = document.querySelector(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(link);
    }
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <>
      {/* ═══ HERO SECTION ═══ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FBFAF7] dot-bg"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        aria-label="Hero section"
      >
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FBFAF7] via-[#FBFAF7]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FBFAF7] via-transparent to-transparent pointer-events-none" />

        {/* Background image */}
        <div className="absolute inset-0 opacity-10">
          <img
            src={slide.backgroundImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-32 pb-20 sm:pt-36 sm:pb-24 text-center">

          {/* Trust badge pill */}
          <div className="inline-flex items-center gap-2 bg-[#C01530]/10 border border-red-200 text-[#C01530] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 sm:mb-8 animate-fadeInUp">
            <><i className="ri-trophy-line mr-2"></i> {slide.badge}</>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0A132B] leading-[1.1] mb-4 sm:mb-6 animate-fadeInUp animation-delay-100">
            {slide.heading}{' '}
            <span className="text-[#C01530]">{slide.subHeading}</span>
          </h1>

          {/* Description */}
          <p className="text-[#667085] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 animate-fadeInUp animation-delay-200">
            {slide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 animate-fadeInUp animation-delay-300">
            <button
              onClick={() => handleCTA(slide.ctaLink)}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#25d366] hover:bg-[#20b858] text-white px-7 sm:px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-200 hover:shadow-lg hover:shadow-green-900/30 hover:-translate-y-0.5 min-h-[52px]"
            >
              <FaWhatsapp className="text-lg" />
              {slide.ctaText}
            </button>
            <button
              onClick={() => handleCTA(slide.ctaSecondaryLink)}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-transparent border-2 border-[#C01530] text-[#C01530] hover:bg-[#9E0E25] hover:text-white px-7 sm:px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 min-h-[52px]"
            >
              {slide.ctaSecondary}
            </button>
          </div>

          {/* Trust Badges Row */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap animate-fadeInUp animation-delay-400">
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 bg-white/80 border border-red-100 rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
              >
                <i className={`text-sm sm:text-base text-[#C01530] ${badge.icon}`}></i>
                <span className="text-[#0A132B] text-[11px] sm:text-xs font-semibold whitespace-nowrap">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Central Navigation Controls — Sleek, compact & with generous margin top */}
          <div className="mt-7 sm:mt-9 flex items-center justify-center animate-fadeInUp animation-delay-400">
            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-[0_2px_12px_rgba(192,21,48,0.08)] border border-red-100">
              <button
                onClick={prevSlide}
                className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-red-200 text-[#0A132B] hover:bg-[#9E0E25] hover:text-white hover:border-[#C01530] transition-all duration-200 no-min-h !min-h-0 min-h-0 p-0 shadow-xs"
                style={{ minHeight: 'unset' }}
                aria-label="Previous slide"
              >
                <FaChevronLeft className="text-[9px] sm:text-[10px]" />
              </button>
              
              <div className="flex items-center gap-1.5 px-1">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`rounded-full transition-all duration-300 no-min-h !min-h-0 min-h-0 p-0 block cursor-pointer ${
                      i === currentSlide
                        ? 'bg-[#C01530] border border-[#C01530] shadow-xs'
                        : 'bg-white border border-[#C01530]/40 hover:border-[#C01530] hover:scale-110'
                    }`}
                    style={{
                      minHeight: 'unset',
                      height: '5px',
                      width: i === currentSlide ? '20px' : '5px'
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-red-200 text-[#0A132B] hover:bg-[#9E0E25] hover:text-white hover:border-[#C01530] transition-all duration-200 no-min-h !min-h-0 min-h-0 p-0 shadow-xs"
                style={{ minHeight: 'unset' }}
                aria-label="Next slide"
              >
                <FaChevronRight className="text-[9px] sm:text-[10px]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
