import React, { useState } from 'react';
import { STAND_TIERS } from '../data/mockData';
import { StandId, StandTier } from '../types';
import { Shield, Info, Check, ArrowRight, Eye } from 'lucide-react';

interface StadiumMapProps {
  selectedStandId: StandId | null;
  onSelectStand: (standId: StandId) => void;
  currency: 'KES' | 'USD';
}

export const StadiumMap: React.FC<StadiumMapProps> = ({
  selectedStandId,
  onSelectStand,
  currency,
}) => {
  const [hoveredStandId, setHoveredStandId] = useState<StandId | null>(null);

  const activeStand = STAND_TIERS.find(
    (t) => t.id === (hoveredStandId || selectedStandId || 'west_lower')
  );

  return (
    <div id="stadium-map" className="py-12 bg-[#090d14] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <span>Interactive Seating Plan</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-semibold">60,000 Capacity Bowl</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Raila Odinga International Stadium Layout
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Click any section on the stadium map to inspect ticket availability, view entry gates, and pick individual allocated seats.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-emerald-500/80 border border-emerald-400" />
              <span className="text-slate-300">Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-amber-500/80 border border-amber-400" />
              <span className="text-slate-300">Limited</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-slate-700 border border-slate-600" />
              <span className="text-slate-400">Sold Out</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive SVG Stadium Viewport */}
          <div className="lg:col-span-8 bg-slate-900/60 rounded-2xl border border-slate-800 p-4 sm:p-6 shadow-xl relative overflow-hidden">
            <div className="text-center text-[11px] font-mono tracking-widest text-slate-500 uppercase mb-2">
              ▲ NORTH STAND (BAYERN FAN ZONE) · GATE 3 & 4 ▲
            </div>

            <div className="relative aspect-[16/11] max-w-2xl mx-auto flex items-center justify-center">
              <svg
                viewBox="0 0 800 550"
                className="w-full h-full select-none"
                style={{ filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.5))' }}
              >
                <defs>
                  <linearGradient id="grassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#15803d" />
                    <stop offset="100%" stopColor="#166534" />
                  </linearGradient>
                  <linearGradient id="roofGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#dc2626" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Outer Maasai shield stadium architectural perimeter */}
                <ellipse
                  cx="400"
                  cy="275"
                  rx="380"
                  ry="250"
                  fill="#0b0f17"
                  stroke="#334155"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />

                {/* Outer Concourse Track */}
                <ellipse
                  cx="400"
                  cy="275"
                  rx="360"
                  ry="235"
                  fill="#111827"
                  stroke="#1e293b"
                  strokeWidth="2"
                />

                {/* ================= NORTH STAND (UPPER) ================= */}
                <path
                  d="M 170 120 Q 400 45 630 120 L 580 160 Q 400 100 220 160 Z"
                  fill={selectedStandId === 'north_upper' ? '#3b82f6' : '#1e293b'}
                  stroke={hoveredStandId === 'north_upper' ? '#60a5fa' : '#334155'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200 hover:fill-blue-600/70"
                  onMouseEnter={() => setHoveredStandId('north_upper')}
                  onMouseLeave={() => setHoveredStandId(null)}
                  onClick={() => onSelectStand('north_upper')}
                />
                <text x="400" y="90" fill="#94a3b8" fontSize="12" textAnchor="middle" fontWeight="bold">
                  NORTH UPPER · SOLD OUT (KSH 2,500)
                </text>

                {/* ================= NORTH STAND (LOWER) ================= */}
                <path
                  d="M 230 165 Q 400 115 570 165 L 530 205 Q 400 165 270 205 Z"
                  fill={selectedStandId === 'north_lower' ? '#0ea5e9' : '#1e293b'}
                  stroke={hoveredStandId === 'north_lower' ? '#38bdf8' : '#334155'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200 hover:fill-sky-600/70"
                  onMouseEnter={() => setHoveredStandId('north_lower')}
                  onMouseLeave={() => setHoveredStandId(null)}
                  onClick={() => onSelectStand('north_lower')}
                />
                <text x="400" y="150" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontWeight="bold">
                  NORTH LOWER · SOLD OUT (KSH 3,500)
                </text>

                {/* ================= SOUTH STAND (LOWER) ================= */}
                <path
                  d="M 270 345 Q 400 385 530 345 L 570 385 Q 400 435 230 385 Z"
                  fill={selectedStandId === 'south_lower' ? '#0ea5e9' : '#1e293b'}
                  stroke={hoveredStandId === 'south_lower' ? '#38bdf8' : '#334155'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200 hover:fill-sky-600/70"
                  onMouseEnter={() => setHoveredStandId('south_lower')}
                  onMouseLeave={() => setHoveredStandId(null)}
                  onClick={() => onSelectStand('south_lower')}
                />
                <text x="400" y="405" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontWeight="bold">
                  SOUTH LOWER · (AJAX ZONE)
                </text>

                {/* ================= SOUTH STAND (UPPER) ================= */}
                <path
                  d="M 220 390 Q 400 450 580 390 L 630 430 Q 400 505 170 430 Z"
                  fill={selectedStandId === 'south_upper' ? '#3b82f6' : '#1e293b'}
                  stroke={hoveredStandId === 'south_upper' ? '#60a5fa' : '#334155'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200 hover:fill-blue-600/70"
                  onMouseEnter={() => setHoveredStandId('south_upper')}
                  onMouseLeave={() => setHoveredStandId(null)}
                  onClick={() => onSelectStand('south_upper')}
                />
                <text x="400" y="465" fill="#94a3b8" fontSize="12" textAnchor="middle" fontWeight="bold">
                  SOUTH UPPER · SOLD OUT (KSH 2,500)
                </text>

                {/* ================= WEST GRANDSTAND (MAIN / VIP / MEDIA) ================= */}
                {/* West Tier 1 Lower */}
                <path
                  d="M 120 170 Q 185 275 120 380 L 175 350 Q 235 275 175 200 Z"
                  fill={selectedStandId === 'west_lower' ? '#f59e0b' : '#b45309'}
                  stroke={hoveredStandId === 'west_lower' ? '#fbbf24' : '#f59e0b'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200 hover:fill-amber-500"
                  onMouseEnter={() => setHoveredStandId('west_lower')}
                  onMouseLeave={() => setHoveredStandId(null)}
                  onClick={() => onSelectStand('west_lower')}
                />

                {/* West VIP Club & Presidential Grandstand */}
                <path
                  d="M 70 140 Q 135 275 70 410 L 115 375 Q 170 275 115 175 Z"
                  fill={selectedStandId === 'west_vip' ? '#ec4899' : '#be185d'}
                  stroke={hoveredStandId === 'west_vip' ? '#f472b6' : '#ec4899'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200 hover:fill-pink-500"
                  onMouseEnter={() => setHoveredStandId('west_vip')}
                  onMouseLeave={() => setHoveredStandId(null)}
                  onClick={() => onSelectStand('west_vip')}
                />

                {/* Presidential Skyboxes */}
                <path
                  d="M 30 160 Q 75 275 30 390 L 65 370 Q 105 275 65 180 Z"
                  fill={selectedStandId === 'platinum_skybox' ? '#a855f7' : '#7e22ce'}
                  stroke={hoveredStandId === 'platinum_skybox' ? '#c084fc' : '#a855f7'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200 hover:fill-purple-500"
                  onMouseEnter={() => setHoveredStandId('platinum_skybox')}
                  onMouseLeave={() => setHoveredStandId(null)}
                  onClick={() => onSelectStand('platinum_skybox')}
                />

                <text
                  x="80"
                  y="280"
                  fill="#ffffff"
                  fontSize="12"
                  fontWeight="900"
                  textAnchor="middle"
                  transform="rotate(-90 80 280)"
                >
                  WEST VIP GRANDSTAND
                </text>

                {/* ================= EAST STAND (LOWER & UPPER) ================= */}
                {/* East Lower Tier */}
                <path
                  d="M 625 200 Q 565 275 625 350 L 680 380 Q 615 275 680 170 Z"
                  fill={selectedStandId === 'east_lower' ? '#10b981' : '#059669'}
                  stroke={hoveredStandId === 'east_lower' ? '#34d399' : '#10b981'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200 hover:fill-emerald-400"
                  onMouseEnter={() => setHoveredStandId('east_lower')}
                  onMouseLeave={() => setHoveredStandId(null)}
                  onClick={() => onSelectStand('east_lower')}
                />

                {/* East Upper Tier */}
                <path
                  d="M 685 175 Q 630 275 685 375 L 730 410 Q 665 275 730 140 Z"
                  fill={selectedStandId === 'east_upper' ? '#0ea5e9' : '#1e293b'}
                  stroke={hoveredStandId === 'east_upper' ? '#38bdf8' : '#334155'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200 hover:fill-sky-600/70"
                  onMouseEnter={() => setHoveredStandId('east_upper')}
                  onMouseLeave={() => setHoveredStandId(null)}
                  onClick={() => onSelectStand('east_upper')}
                />

                <text
                  x="720"
                  y="280"
                  fill="#cbd5e1"
                  fontSize="12"
                  fontWeight="900"
                  textAnchor="middle"
                  transform="rotate(90 720 280)"
                >
                  EAST STAND (NGONG ROAD)
                </text>

                {/* ================= FOOTBALL PITCH ================= */}
                <rect
                  x="260"
                  y="190"
                  width="280"
                  height="170"
                  rx="6"
                  fill="url(#grassGrad)"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                {/* Pitch Mowing Stripes */}
                {Array.from({ length: 7 }).map((_, i) => (
                  <rect
                    key={i}
                    x={260 + i * 40}
                    y="190"
                    width="20"
                    height="170"
                    fill="#ffffff"
                    fillOpacity="0.05"
                  />
                ))}
                {/* Halfway line */}
                <line x1="400" y1="190" x2="400" y2="360" stroke="#ffffff" strokeWidth="2" />
                {/* Center Circle & Spot */}
                <circle cx="400" cy="275" r="30" fill="none" stroke="#ffffff" strokeWidth="2" />
                <circle cx="400" cy="275" r="3" fill="#ffffff" />

                {/* West Goal Box (Pitch Left) */}
                <rect x="260" y="235" width="45" height="80" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                <rect x="260" y="252" width="18" height="46" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                <rect x="250" y="260" width="10" height="30" fill="#ffffff" fillOpacity="0.3" stroke="#ffffff" strokeWidth="1" />

                {/* East Goal Box (Pitch Right) */}
                <rect x="495" y="235" width="45" height="80" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                <rect x="522" y="252" width="18" height="46" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                <rect x="540" y="260" width="10" height="30" fill="#ffffff" fillOpacity="0.3" stroke="#ffffff" strokeWidth="1" />

                {/* Center Pitch Title */}
                <text x="400" y="245" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold" opacity="0.8">
                  RAILA ODINGA INTERNATIONAL STADIUM
                </text>
                <text x="400" y="315" fill="#fef08a" fontSize="10" textAnchor="middle" fontWeight="black" opacity="0.9">
                  ⚽ BAYERN MÜNCHEN vs AJAX ⚽
                </text>
              </svg>
            </div>

            <div className="text-center text-[11px] font-mono tracking-widest text-slate-500 uppercase mt-2">
              ▼ SOUTH STAND (AJAX FAN ZONE / FAMILY SECTION) · GATE 7 ▼
            </div>
          </div>

          {/* Stand Details Sidebar */}
          <div className="lg:col-span-4 bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Section Details
                </span>
                {activeStand?.soldOut ? (
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400 text-xs font-semibold">
                    Sold Out
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-700/60 text-emerald-400 text-xs font-semibold">
                    {activeStand?.availableSeats} Seats Available
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">
                {activeStand?.name}
              </h3>
              <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mt-0.5">
                {activeStand?.category} · {activeStand?.standLocation}
              </p>

              <div className="my-5 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-400">Official Ticket Price</span>
                  <div className="text-right">
                    <span className="font-mono text-2xl font-black text-white">
                      {currency === 'KES'
                        ? `KSh ${activeStand?.priceKES.toLocaleString()}`
                        : `$${activeStand?.priceUSD}`}
                    </span>
                    <span className="text-[10px] text-slate-500 block font-normal">
                      Incl. security levy & ticketing fee
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {activeStand?.description}
              </p>

              <div className="space-y-2 text-xs border-t border-slate-800 pt-4 mb-6">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Designated Stadium Gate:</span>
                  <span className="text-white font-medium">{activeStand?.gate}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Turnstile Code:</span>
                  <span className="font-mono text-white font-medium">{activeStand?.turnstile}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Seat Allocation:</span>
                  <span className="text-emerald-400 font-medium">Individual Numbered Armchair</span>
                </div>
              </div>

              {/* Stand Perks */}
              <div className="space-y-1.5 mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Ticket Inclusions:
                </span>
                {activeStand?.perks?.map((perk: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => activeStand && onSelectStand(activeStand.id)}
              disabled={activeStand?.soldOut}
              className={`w-full py-3.5 px-4 rounded-xl font-display font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                activeStand?.soldOut
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                  : 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-950/50 active:scale-98'
              }`}
            >
              {activeStand?.soldOut ? (
                <span>Section Sold Out</span>
              ) : (
                <>
                  <span>Select Seats in {activeStand?.name.split('(')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
