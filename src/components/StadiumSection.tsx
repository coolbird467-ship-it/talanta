import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StadiumSectionProps {
  onOpenAbout?: () => void;
}

export const StadiumSection: React.FC<StadiumSectionProps> = ({ onOpenAbout }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: '/assets/stadium/carousel_exterior.png',
      alt: 'Raila Odinga International Stadium exterior view with Maasai shield facade',
    },
    {
      src: '/assets/stadium/carousel_interior.png',
      alt: 'Spectator bowl with red, white and green seating tiers and pitch',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="stadium" className="py-16 sm:py-20 bg-[#faf9f6] text-slate-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial & Capacity Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase block mb-1">
                THE STADIUM
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
                RAILA ODINGA INTERNATIONAL STADIUM
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Welcome to the Raila Odinga International Stadium, a 60,000-seat venue built for the passion of sports and the energy of live entertainment. This is where Kenya's sporting ambition meets the world.
            </p>

            {/* 3 Metric Cards matching video frames */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm text-center">
                <span className="font-display font-black text-2xl sm:text-3xl text-slate-900 block leading-none">
                  60,000
                </span>
                <span className="text-xs text-slate-500 font-medium mt-1 block">Capacity</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm text-center">
                <span className="font-display font-black text-xl sm:text-2xl text-slate-900 block leading-none truncate">
                  Ngong Rd
                </span>
                <span className="text-xs text-slate-500 font-medium mt-1 block">Nairobi</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm text-center">
                <span className="font-display font-black text-2xl sm:text-3xl text-slate-900 block leading-none">
                  AFCON
                </span>
                <span className="text-xs text-slate-500 font-medium mt-1 block">Host 2027</span>
              </div>
            </div>

            {/* About the Stadium text link */}
            <div className="pt-2">
              <button
                onClick={onOpenAbout}
                className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>About the Stadium</span>
                <span>&gt;</span>
              </button>
            </div>
          </div>

          {/* Right Column: Photo Carousel with interactive dots */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-900 aspect-[16/10] group">
              <img
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Prev / Next controls */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Carousel navigation dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentSlide === index ? 'bg-slate-900 w-6' : 'bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
