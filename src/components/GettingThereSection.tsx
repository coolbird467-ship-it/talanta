import React from 'react';
import { MapPin, Plane, ExternalLink, Navigation } from 'lucide-react';

export const GettingThereSection: React.FC = () => {

  return (
    <section id="getting-there" className="py-16 sm:py-20 bg-[#faf9f6] text-slate-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mb-8">
          Getting there
        </h2>

        {/* Two Information Cards side by side matching video */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1: Address */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shrink-0 text-slate-700">
              <MapPin className="w-5 h-5 text-red-600" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-base text-slate-900">Address</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Raila Odinga International Stadium, Talanta Sports City, Ngong Rd, Nairobi.{' '}
                <a
                  href="https://maps.google.com/?q=Jamhuri+Park+Ngong+Road+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2 inline-flex items-center gap-1"
                >
                  Get directions
                  <ExternalLink className="w-3 h-3 inline" />
                </a>
              </p>
              <p className="text-xs text-slate-400 pt-1">
                Your gate and entrance are on your ticket label
              </p>
            </div>
          </div>

          {/* Card 2: Flying In */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center shrink-0 text-slate-700">
              <Plane className="w-5 h-5 text-blue-600" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-base text-slate-900">Flying in</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fly into Jomo Kenyatta International Airport (NBO), then drive about 25 km to the stadium.
              </p>
              <p className="text-xs text-slate-400 pt-1">
                Designated shuttle pick-up points at Airport Terminal 1 & 2
              </p>
            </div>
          </div>
        </div>

        {/* Realistic Interactive Map View matching video frame */}
        <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 relative">
          <div className="w-full h-[380px] sm:h-[450px] relative overflow-hidden">
            {/* Embedded Responsive OpenStreetMap / Google Map styled view of Jamhuri Grounds Ngong Rd Nairobi */}
            <iframe
              title="Raila Odinga International Stadium Map Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=36.7400%2C-1.3200%2C36.7900%2C-1.2800&amp;layer=mapnik&amp;marker=-1.3000%2C36.7650"
              className="w-full h-full border-0 filter saturate-90 contrast-105"
              loading="lazy"
            />

            {/* Floating Map Pin Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-stone-200 flex items-center gap-2.5 text-xs">
              <div className="w-3 h-3 rounded-full bg-red-600 animate-ping" />
              <div>
                <strong className="text-slate-900 block font-bold leading-tight">
                  Raila Odinga International Stadium
                </strong>
                <span className="text-[11px] text-slate-500 font-mono">
                  Talanta Sports City · Ngong Rd, Jamhuri Grounds
                </span>
              </div>
            </div>

            {/* Directions Floating Button */}
            <div className="absolute bottom-4 right-4">
              <a
                href="https://maps.google.com/?q=Jamhuri+Park+Ngong+Road+Nairobi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white hover:bg-stone-50 text-slate-800 text-xs font-bold rounded-lg shadow-md border border-stone-200 flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-blue-600" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
