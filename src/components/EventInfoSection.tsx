import React from 'react';
import { Check, Ban, QrCode } from 'lucide-react';

export const EventInfoSection: React.FC = () => {
  return (
    <div className="bg-[#faf9f6] text-slate-900 py-12 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 1. Good to know */}
        <div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight mb-4">
            Good to know
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Gates open at */}
            <div className="bg-white p-5 rounded-xl border border-stone-200/90 shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">Gates open at</span>
              <span className="font-bold text-base text-slate-900 block">11:00</span>
            </div>

            {/* Seats */}
            <div className="bg-white p-5 rounded-xl border border-stone-200/90 shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">Seats</span>
              <span className="font-bold text-base text-slate-900 block">Numbered</span>
            </div>

            {/* Tickets */}
            <div className="bg-white p-5 rounded-xl border border-stone-200/90 shadow-xs sm:col-span-2 md:col-span-1">
              <span className="text-xs text-slate-500 block mb-1">Tickets</span>
              <span className="font-bold text-base text-slate-900 block">SMS + e-mail</span>
            </div>
          </div>
        </div>

        {/* 2. What's included */}
        <div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight mb-4">
            What&apos;s included
          </h2>

          <div className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-xs space-y-3.5">
            <div className="flex items-center gap-3 text-sm text-slate-800">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Your own numbered seat for the match</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-800">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>A QR ticket for the turnstile, by SMS and e-mail</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-800">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Your gate printed on the ticket</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-800">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Your tickets under My tickets, any time</span>
            </div>
          </div>
        </div>

        {/* 3. Stadium rules */}
        <div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight mb-4">
            Stadium rules
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Rule 1: No re-entry */}
            <div className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-slate-700 mb-4">
                  <Ban className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  No re-entry
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Once you leave the stadium, your ticket can&apos;t be used again.
                </p>
              </div>
            </div>

            {/* Rule 2: One QR, one entry */}
            <div className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-slate-700 mb-4">
                  <QrCode className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  One QR, one entry
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Each ticket opens the turnstile once. Turn your screen brightness up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
