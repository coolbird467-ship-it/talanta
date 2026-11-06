import React, { useState } from 'react';
import { STADIUM_RULES, FAQS } from '../data/mockData';
import {
  ShieldAlert,
  Bus,
  Clock,
  Ticket,
  ChevronDown,
  HelpCircle,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export const MatchdayGuide: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div id="guide" className="py-16 bg-[#0b0f17] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold uppercase tracking-widest mb-2">
            <Clock className="w-4 h-4" />
            <span>Matchday Operations & Logistics</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Stadium Guide & Entry Policies
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Essential directives issued by the Ministry of Sports and Talanta Sports City Authority for all spectators attending the Bayern vs Ajax clash.
          </p>
        </div>

        {/* Stadium Exterior Architectural Feature Card */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 relative min-h-[300px]">
            <img
              src="/src/assets/images/talanta_stadium_exterior_1793969314920.jpg"
              alt="Raila Odinga International Stadium exterior view"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-red-500 font-bold block mb-1">
                Jamhuri Grounds · Ngong Road, Nairobi
              </span>
              <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">
                Raila Odinga International Stadium
              </h3>
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                Designed to IAAF and FIFA Grade-1 benchmarks, featuring iconic Maasai shield architectural canopies, ultra-fast biometric turnstiles, and hybrid natural turf.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
              <div className="flex items-start gap-2.5">
                <Bus className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Park & Ride Shuttles</strong>
                  <span className="text-slate-400 text-[11px]">
                    Dedicated electric shuttles running from Kencom, Railways, and Jamhuri Park transit loops directly to stadium gates.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Turnstile Opening Schedule</strong>
                  <span className="text-slate-400 text-[11px]">
                    Gates open at 15:00 EAT. Pre-match opening ceremonies and live cultural entertainment begin at 17:00 EAT.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stadium Directives Grid */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-black text-white uppercase tracking-tight mb-6">
            Mandatory Spectator Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STADIUM_RULES.map((rule, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 rounded-xl border border-slate-800 p-5 space-y-2 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-slate-800 border border-slate-700 text-emerald-400 flex items-center justify-center text-xs font-mono font-bold">
                    0{idx + 1}
                  </div>
                  <h4 className="font-display text-base font-bold text-white uppercase tracking-wide">
                    {rule.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-8">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ticketing FAQs Section */}
        <div id="faqs" className="max-w-3xl mx-auto pt-6">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase text-red-500 font-bold block mb-1">
              Need Assistance?
            </span>
            <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-slate-900/90 rounded-xl border border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-white hover:text-red-400 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 bg-slate-950/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
