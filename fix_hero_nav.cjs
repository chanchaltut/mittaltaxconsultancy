const fs = require('fs');
let c = fs.readFileSync('src/components/Hero.jsx', 'utf8');

const oldNav = `        {/* Slide Navigation Arrows (desktop only) */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/70 border border-red-100 text-[#0A132B] hover:bg-[#E31937] hover:text-white hover:border-[#E31937] transition-all duration-200"
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/70 border border-red-100 text-[#0A132B] hover:bg-[#E31937] hover:text-white hover:border-[#E31937] transition-all duration-200"
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>

        {/* Slide Dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={\`h-2 rounded-full transition-all duration-300 \${
                i === currentSlide ? 'bg-[#E31937] w-8' : 'bg-[#0A132B]/20 w-2 hover:bg-[#0A132B]/40'
              }\`}
              aria-label={\`Go to slide \${i + 1}\`}
            />
          ))}
        </div>`;

const newNav = `        {/* Central Navigation Controls */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-white/80 backdrop-blur-md px-3 py-2.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-red-100/50">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-[#0A132B] hover:bg-[#E31937] hover:text-white transition-all duration-200"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-xs" />
          </button>
          
          <div className="flex items-center gap-1.5">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={\`h-3 rounded-full transition-all duration-300 \${
                  i === currentSlide ? 'bg-[#E31937] w-6 sm:w-8' : 'bg-red-50 w-2 hover:bg-red-100'
                }\`}
                aria-label={\`Go to slide \${i + 1}\`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-[#0A132B] hover:bg-[#E31937] hover:text-white transition-all duration-200"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-xs" />
          </button>
        </div>`;

c = c.replace(oldNav, newNav);

fs.writeFileSync('src/components/Hero.jsx', c);
console.log('Hero nav fixed');
