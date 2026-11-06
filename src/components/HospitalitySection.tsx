import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface HospitalitySectionProps {
  onSelectHospitality: (tierName: string) => void;
}

export const HospitalitySection: React.FC<HospitalitySectionProps> = ({ onSelectHospitality }) => {
  const [modalTier, setModalTier] = useState<string | null>(null);

  const packages = [
    {
      id: 'gold',
      badge: 'Gold',
      image: '/assets/stadium/hospitality_gold.png',
      title: 'GOLD',
      sectionInfo: 'Hospitality sections F01–F05',
      summary: 'Elevated Match-Day Hospitality',
      bullets: [
        'VIP entrance into Raila Odinga International Stadium',
        'Access to the Gold Hospitality Suite within the stadium.',
      ],
      bottomLeft: null,
      price: 'KSh 20,000',
    },
    {
      id: 'platinum',
      badge: 'Platinum',
      image: '/assets/stadium/hospitality_gold.png',
      title: 'PLATINUM',
      sectionInfo: 'Level 2 · main stand',
      summary: 'Premium Match-Day Hospitality',
      bullets: [
        'Exclusive VIP entrance into Raila Odinga International Stadium',
        'Access to the Platinum Hospitality Lounge within the stadium.',
      ],
      bottomLeft: (
        <div>
          <span className="text-[10px] text-slate-400 block leading-tight">On sale now</span>
          <span className="text-sm font-bold text-slate-900 leading-tight">Per seat</span>
        </div>
      ),
      price: 'KSh 35,000',
    },
    {
      id: 'skybox',
      badge: 'Whole box',
      image: '/assets/stadium/hospitality_gold.png',
      title: 'SKYBOX',
      sectionInfo: 'Level 2 · boxes round the stadium',
      summary: null,
      bullets: [
        'Your own box, sold whole',
        'Every seat in it is yours',
      ],
      bottomLeft: (
        <span className="text-sm font-bold text-slate-900 leading-tight">Booked by e-mail</span>
      ),
      price: 'Inquire',
    },
  ];

  return (
    <section id="hospitality" className="py-16 sm:py-20 bg-white text-slate-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-8">
          Hospitality
        </h2>

        {/* 3-column cards matching exact video layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl border border-stone-200/90 overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Image with top-left badge */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-white text-slate-900 text-xs font-semibold shadow-sm">
                      {pkg.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-3xl font-black text-slate-900 uppercase tracking-tight leading-none mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal mb-3">
                    {pkg.sectionInfo}
                  </p>

                  {pkg.summary && (
                    <p className="text-xs font-semibold text-slate-800 mb-3">
                      {pkg.summary}
                    </p>
                  )}

                  <div className="space-y-2 pt-1">
                    {pkg.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#15803d] shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-stone-100 mt-2">
                <div>
                  {pkg.bottomLeft}
                </div>
                <button
                  onClick={() => {
                    setModalTier(pkg.title);
                    onSelectHospitality(pkg.title);
                  }}
                  className="px-4 py-2 bg-[#15803d] hover:bg-[#166534] text-white text-xs font-semibold rounded-md shadow-sm transition-colors cursor-pointer ml-auto"
                >
                  What you get
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hospitality Details Modal */}
      {modalTier && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 text-slate-900 shadow-2xl relative">
            <button
              onClick={() => setModalTier(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono font-bold uppercase text-[#15803d] block mb-1">
              VIP Hospitality Package
            </span>
            <h3 className="font-display text-2xl font-black uppercase text-slate-900">
              {modalTier} Hospitality Package
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Raila Odinga International Stadium · Bayern vs Ajax
            </p>

            <div className="space-y-3 text-xs text-slate-700 bg-stone-50 p-4 rounded-xl border border-stone-200 mb-6">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Dedicated express VIP red carpet turnstile entry</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Gourmet pre-match, halftime & post-match chef&apos;s buffet</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Complimentary premium beverages, soft drinks and Kenyan tea</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Padded armchairs in elevated West Grandstand</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>VIP Priority Parking permit at Gate 1</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setModalTier(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setModalTier(null);
                  onSelectHospitality(modalTier);
                }}
                className="px-5 py-2.5 bg-[#15803d] hover:bg-[#166534] text-white text-xs font-bold rounded-lg shadow-sm cursor-pointer"
              >
                Book This Package
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
