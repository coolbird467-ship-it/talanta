import React, { useState } from 'react';
import {
  Share2,
  Navigation,
  Check,
  Ban,
  QrCode,
  MapPin,
  Plane,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface MatchInfoPageProps {
  onOpenSeats: () => void;
}

export const MatchInfoPage: React.FC<MatchInfoPageProps> = ({ onOpenSeats }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Jamhuri+Park+Ngong+Road+Nairobi', '_blank');
  };

  return (
    <div className="bg-[#faf9f6] text-slate-900 min-h-screen">
      {/* Hero Banner Section matching frames 00:04 - 00:10 and 00:26 - 00:28 */}
      <section className="bg-[#07090e] text-white pt-6 pb-12 sm:pb-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb matching video */}
          <div className="text-xs text-slate-400 mb-8 font-medium">
            <span className="hover:text-white cursor-pointer">Home</span>
            <span className="mx-2">&gt;</span>
            <span className="text-slate-200">Match info</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Match Fixture & Buttons */}
            <div className="lg:col-span-6 space-y-6">
              {/* Two Circular Club Crests side-by-side */}
              <div className="flex items-center gap-4">
                {/* FC Bayern Crest */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#DC052D] p-1 shadow-lg flex items-center justify-center shrink-0 border-2 border-white/20">
                  <div className="w-full h-full rounded-full bg-[#DC052D] border-2 border-blue-600 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-25 grid grid-cols-4 transform rotate-45 scale-125">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className={`h-2.5 w-2.5 ${i % 2 === 0 ? 'bg-white' : 'bg-blue-600'}`} />
                      ))}
                    </div>
                    <span className="relative z-10 text-[7px] font-black text-white tracking-widest uppercase">
                      FC BAYERN
                    </span>
                    <span className="relative z-10 text-[6px] font-bold text-blue-200 uppercase">
                      MÜNCHEN
                    </span>
                    <span className="relative z-10 text-[6px] text-amber-300">★★★★★</span>
                  </div>
                </div>

                {/* AFC Ajax Crest */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-1 shadow-lg flex items-center justify-center shrink-0 border-2 border-red-600/30">
                  <div className="w-full h-full rounded-full bg-white border-2 border-red-600 flex flex-col items-center justify-center relative overflow-hidden">
                    <span className="text-[7px] text-amber-500 font-bold">★★★</span>
                    <span className="font-display font-black text-[9px] text-red-600 tracking-wider">
                      AJAX
                    </span>
                    <span className="text-[6px] font-black text-slate-800 uppercase">
                      AMSTERDAM
                    </span>
                  </div>
                </div>
              </div>

              {/* Big Bold Match Title */}
              <div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
                  BAYERN MUNICH
                  <br />
                  VS AJAX
                </h1>

                {/* Date & Gates */}
                <p className="text-sm sm:text-base font-semibold text-slate-300 mt-4">
                  Tue 5 Jan 2027 · Gates open at 11:00
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Raila Odinga International Stadium, Nairobi
                </p>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenSeats}
                  className="px-6 py-3 bg-[#15803d] hover:bg-[#166534] active:scale-98 text-white font-bold text-xs sm:text-sm rounded-md transition-all shadow-md uppercase tracking-wider cursor-pointer"
                >
                  Buy tickets
                </button>

                <button
                  onClick={handleShare}
                  className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer border border-white/10"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copiedShare ? 'Link Copied!' : 'Share'}</span>
                </button>

                <button
                  onClick={handleDirections}
                  className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer border border-white/10"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Directions</span>
                </button>
              </div>

              {/* Pricing Line */}
              <div className="text-xs text-slate-300 font-medium pt-1">
                From <span className="font-bold text-white">KSh 2,500</span> per person ·{' '}
                <button
                  onClick={onOpenSeats}
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 cursor-pointer"
                >
                  All prices
                </button>
              </div>
            </div>

            {/* Right Column: 3D Stadium Render matching video frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] bg-stone-900 group">
                <img
                  src="/assets/stadium/hero_stadium.png"
                  alt="Raila Odinga International Stadium 3D architectural rendering"
                  className="w-full h-full object-cover filter contrast-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container matching frames 00:28 - 00:44 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Section: Good to know */}
        <section className="space-y-4">
          <h2 className="font-bold text-lg text-slate-900">Good to know</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-3">
              <div>
                <span className="text-xs text-slate-500 font-medium block">Gates open at</span>
                <span className="font-bold text-sm text-slate-900">11:00</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium block">Delivery</span>
                <span className="font-bold text-sm text-slate-900">SMS + e-mail</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-3">
              <div>
                <span className="text-xs text-slate-500 font-medium block">Seat</span>
                <span className="font-bold text-sm text-slate-900">Numbered</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: What's included */}
        <section className="space-y-4">
          <h2 className="font-bold text-lg text-slate-900">What's included</h2>
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-3 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#15803d] shrink-0" />
              <span>Your own numbered seat for the match</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#15803d] shrink-0" />
              <span>A QR ticket for the turnstile, by SMS and e-mail</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#15803d] shrink-0" />
              <span>Your gate printed on the ticket</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-[#15803d] shrink-0" />
              <span>Your tickets under My tickets, anytime</span>
            </div>
          </div>
        </section>

        {/* Section: Stadium rules */}
        <section className="space-y-4">
          <h2 className="font-bold text-lg text-slate-900">Stadium rules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-slate-700">
                <Ban className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">No re-entry</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Once you leave the stadium, your ticket can't be used again.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-slate-700">
                <QrCode className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">One QR, one entry</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Each ticket passes the turnstile once. Turn your screen brightness up.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Getting there */}
        <section className="space-y-4">
          <h2 className="font-bold text-lg text-slate-900">Getting there</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <h3 className="font-bold text-sm text-slate-900">Address</h3>
              </div>
              <p className="text-xs text-slate-600">
                Raila Odinga International Stadium, Talanta Sports City, Ngong Rd, Nairobi.{' '}
                <a
                  href="https://maps.google.com/?q=Jamhuri+Park+Ngong+Road+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold underline inline-flex items-center gap-0.5"
                >
                  Get directions
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
              <p className="text-[11px] text-slate-400 pt-1">
                Your gate and entrance are printed on your ticket.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-1">
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-blue-600" />
                <h3 className="font-bold text-sm text-slate-900">Flying in</h3>
              </div>
              <p className="text-xs text-slate-600">
                Fly to Jomo Kenyatta International Airport (NBO), then drive about 25 km to the stadium.
              </p>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="rounded-xl overflow-hidden border border-stone-200 shadow-sm h-80 relative">
            <iframe
              title="Raila Odinga Stadium Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=36.7400%2C-1.3200%2C36.7900%2C-1.2800&amp;layer=mapnik&amp;marker=-1.3000%2C36.7650"
              className="w-full h-full border-0 filter saturate-90"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 bg-white/95 px-3 py-1.5 rounded-lg shadow border border-stone-200 text-xs font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <span>Raila Odinga International Stadium</span>
            </div>
          </div>
        </section>

        {/* Section: Questions (Exact questions from video frames 00:34 - 00:40) */}
        <section className="space-y-4">
          <h2 className="font-bold text-lg text-slate-900">Questions</h2>
          <div className="space-y-3">
            {/* Question 1 */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full p-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between"
              >
                <span>How many tickets can I buy?</span>
                {openFaq === 0 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openFaq === 0 && (
                <div className="px-4 pb-4 pt-1 text-xs text-slate-600 border-t border-stone-100">
                  Up to 10 per order. You can easily select up to 10 side-by-side or bigger groups get blocks close together, for example 5 + 5.
                </div>
              )}
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full p-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between"
              >
                <span>How long are my seats held?</span>
                {openFaq === 1 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openFaq === 1 && (
                <div className="px-4 pb-4 pt-1 text-xs text-slate-600 border-t border-stone-100">
                  15 minutes from purchase. The timer is always on screen while you pay.
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
