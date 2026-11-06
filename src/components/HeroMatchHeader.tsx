import React from 'react';
import { Share2, Navigation } from 'lucide-react';

interface HeroMatchHeaderProps {
  onOpenBuyTickets: () => void;
  onOpenAllPrices?: () => void;
}

export const HeroMatchHeader: React.FC<HeroMatchHeaderProps> = ({
  onOpenBuyTickets,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Bayern Munich vs Ajax - Talanta Sports City',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Jamhuri+Park+Ngong+Road+Nairobi', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-[560px] md:min-h-[620px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#0a0b0d] text-white">
      {/* Background Stadium Photography positioned to the right with smooth dark gradient fade to left */}
      <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none">
        <img
          src="/assets/stadium/hero_stadium.png"
          alt="Raila Odinga International Stadium illuminated at night"
          className="w-full md:w-[70%] lg:w-[65%] h-full object-cover object-center md:object-right opacity-90 contrast-110 brightness-95"
          referrerPolicy="no-referrer"
        />
        {/* Soft edge gradients so the left text is on pure dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0d] via-[#0a0b0d]/70 md:via-[#0a0b0d]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-transparent to-[#0a0b0d]/60" />
      </div>

      {/* Hero Content Left-Aligned, exactly matching Screenshot From 2026-11-06 16-30-14.png */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-20">
        <div className="max-w-2xl text-left">
          {/* Breadcrumb matching exact screenshot: Home > Match info */}
          <div className="text-xs text-slate-400 mb-4 flex items-center gap-1.5 font-normal">
            <span>Home</span>
            <span className="text-slate-600">&gt;</span>
            <span className="text-slate-300">Match info</span>
          </div>

          {/* Club Badges Row: Bayern München | Ajax */}
          <div className="flex items-center gap-3.5 mb-5">
            <img
              src="/assets/stadium/badge_bayern.png"
              alt="FC Bayern München"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-contain shadow-md drop-shadow"
            />
            <div className="h-9 w-px bg-white/20" />
            <img
              src="/assets/stadium/badge_ajax.png"
              alt="AFC Ajax"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-contain shadow-md drop-shadow bg-white/10"
            />
          </div>

          {/* Big Bold Condensed Match Title: Stacking in 2 lines */}
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight uppercase leading-[0.92] text-white mb-5">
            BAYERN MUNICH<br />
            VS AJAX
          </h1>

          {/* Match Date and Gate Times */}
          <div className="text-sm sm:text-base font-semibold text-slate-200 tracking-normal mb-1">
            Tue 5 Jan 2027 · Gates open at 11:00
          </div>

          {/* Stadium Location */}
          <p className="text-sm sm:text-base text-slate-300 font-normal mb-6">
            Raila Odinga International Stadium, Nairobi
          </p>

          {/* Exact 3 Buttons Row matching Screenshot From 2026-11-06 16-30-14.png */}
          <div className="flex flex-wrap items-center gap-3">
            {/* White Buy tickets button */}
            <button
              onClick={onOpenBuyTickets}
              className="px-7 py-3 bg-white text-black hover:bg-slate-100 active:scale-98 font-semibold text-sm sm:text-base rounded-md shadow-lg transition-all cursor-pointer"
            >
              Buy tickets
            </button>

            {/* Dark Share button */}
            <button
              onClick={handleShare}
              className="px-5 py-3 bg-[#26272b] hover:bg-[#32343a] text-white font-medium text-sm sm:text-base rounded-md transition-all flex items-center gap-2 cursor-pointer border border-white/10"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Link copied' : 'Share'}</span>
            </button>

            {/* Dark Directions button */}
            <button
              onClick={handleDirections}
              className="px-5 py-3 bg-[#26272b] hover:bg-[#32343a] text-white font-medium text-sm sm:text-base rounded-md transition-all flex items-center gap-2 cursor-pointer border border-white/10"
            >
              <Navigation className="w-4 h-4" />
              <span>Directions</span>
            </button>
          </div>

          {/* Price Kicker */}
          <div className="text-xs sm:text-sm text-slate-300 mt-4 font-normal">
            From <span className="font-bold text-white">KSh 20,000</span> per seat ·{' '}
            <button
              onClick={onOpenBuyTickets}
              className="underline text-slate-200 hover:text-white cursor-pointer"
            >
              All prices
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
