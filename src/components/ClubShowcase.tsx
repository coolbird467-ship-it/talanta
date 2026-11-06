import React from 'react';
import { Trophy, Star, ShieldCheck, Flame } from 'lucide-react';

export const ClubShowcase: React.FC = () => {
  return (
    <div id="fixture" className="py-16 bg-[#080c13] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs text-red-500 font-bold uppercase tracking-widest mb-2">
            <Flame className="w-4 h-4" />
            <span>Continental Titans Meet in East Africa</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            A Historic Clash of European Royalty
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            The grand opening of the 60,000-seat Raila Odinga International Stadium features two of football's most storied institutions bringing full senior squads to Nairobi.
          </p>
        </div>

        {/* Feature Visual & Squad Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Club Card: Bayern Munich */}
          <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-red-400 font-bold">
                GERMAN GIANTS
              </span>
              <span className="text-xs font-mono text-slate-500">Founded 1900</span>
            </div>

            <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">
              FC Bayern München
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Record 33x German Champions and 6x European Cup winners. Known for their high-pressing relentless attacking football and world-class squad depth.
            </p>

            <div className="mt-6 pt-4 border-t border-slate-800 space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  UEFA Champions League
                </span>
                <span className="font-mono font-bold text-white">6 Titles</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Domestic League Titles</span>
                <span className="font-mono font-bold text-white">33 Bundesliga</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Club Motto</span>
                <span className="italic text-red-400 font-semibold">"Mia san Mia"</span>
              </div>
            </div>
          </div>

          {/* Center Visual: Match Duel Image */}
          <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group">
            <img
              src="/src/assets/images/bayern_ajax_match_visual_1793969315331.jpg"
              alt="Bayern Munich and Ajax duel on pitch"
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                INAUGURAL SHOWDOWN
              </span>
              <h4 className="font-display text-lg font-black text-white uppercase tracking-tight">
                Raila Odinga International Stadium
              </h4>
              <p className="text-[11px] text-slate-300 mt-0.5">
                Talanta Sports City · Jamhuri Grounds Nairobi
              </p>
            </div>
          </div>

          {/* Right Club Card: AFC Ajax */}
          <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-red-400 font-bold">
                DUTCH MASTERS
              </span>
              <span className="text-xs font-mono text-slate-500">Founded 1900</span>
            </div>

            <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">
              AFC Ajax Amsterdam
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Pioneers of Total Football and revered globally for developing iconic generations of world talent. 36-time Eredivisie champions and 4-time European conquerors.
            </p>

            <div className="mt-6 pt-4 border-t border-slate-800 space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  UEFA Champions League
                </span>
                <span className="font-mono font-bold text-white">4 Titles</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Domestic League Titles</span>
                <span className="font-mono font-bold text-white">36 Eredivisie</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Club Philosophy</span>
                <span className="italic text-red-400 font-semibold">"Totaalvoetbal"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
