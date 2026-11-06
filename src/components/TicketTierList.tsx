import React from 'react';
import { STAND_TIERS } from '../data/mockData';
import { StandId } from '../types';
import { Check, ShieldCheck, Ticket, Users, AlertCircle, ArrowRight } from 'lucide-react';

interface TicketTierListProps {
  onSelectStand: (standId: StandId) => void;
  currency: 'KES' | 'USD';
}

export const TicketTierList: React.FC<TicketTierListProps> = ({
  onSelectStand,
  currency,
}) => {
  return (
    <div id="tickets" className="py-16 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header adhering to Anti-slop and Typographic guidelines */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <span className="font-semibold text-red-500 uppercase tracking-widest">
                Official Ticketing Tiers
              </span>
              <span aria-hidden="true">·</span>
              <span>Inaugural Match Registry</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Tickets & Seating Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              All categories feature designated reserved individual seating. Max 10 tickets per order. Real-time digital delivery via SMS and Email.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 flex items-center gap-3 shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-xs">
              <span className="text-white font-semibold block">Official Anti-Scalp Guarantee</span>
              <span className="text-slate-400 text-[11px]">Free digital guest transfers in "My Tickets"</span>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STAND_TIERS.map((tier) => {
            const isSoldOut = tier.soldOut;

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl border transition-all duration-200 flex flex-col justify-between p-6 ${
                  isSoldOut
                    ? 'bg-slate-900/40 border-slate-800/80 opacity-75'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 shadow-xl'
                }`}
              >
                {/* Status kicker */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-medium">
                      {tier.standLocation}
                    </span>
                    {isSoldOut ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-900/60">
                        Sold Out
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-900/60 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        {tier.availableSeats} Remaining
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-black text-white uppercase tracking-tight">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-red-400 font-semibold uppercase tracking-wider mt-0.5">
                    {tier.category}
                  </p>

                  <div className="my-5 p-3.5 bg-slate-950 rounded-xl border border-slate-800/80 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-slate-500 block">
                        Per Ticket
                      </span>
                      <span className="font-mono text-2xl font-black text-white tabular-nums">
                        {currency === 'KES'
                          ? `KSh ${tier.priceKES.toLocaleString()}`
                          : `$${tier.priceUSD}`}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{tier.gate}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {tier.description}
                  </p>

                  {/* Perks list */}
                  <div className="space-y-1.5 border-t border-slate-800/80 pt-3 mb-6">
                    {tier.perks.map((perk: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => onSelectStand(tier.id)}
                  disabled={isSoldOut}
                  className={`w-full py-3 px-4 rounded-xl font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    isSoldOut
                      ? 'bg-slate-800/80 text-slate-500 cursor-not-allowed border border-slate-800'
                      : 'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-950/60 active:scale-98'
                  }`}
                >
                  {isSoldOut ? (
                    <span>Allocations Exhausted</span>
                  ) : (
                    <>
                      <span>Select Available Seats</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
