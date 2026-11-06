import React, { useState } from 'react';
import {
  ChevronLeft,
  Share2,
  Moon,
  Sun,
  Plus,
  Minus,
  RotateCcw,
  Camera,
  ChevronDown,
  ChevronUp,
  Loader2,
  Check,
} from 'lucide-react';
import { StadiumLevel } from '../types';

interface InteractiveSeatingPageProps {
  onBack: () => void;
  onProceedToCheckout: (blockName: string, quantity: number, pricePerTicket: number) => void;
}

interface SectionInfo {
  id: string;
  name: string;
  phase: string;
  level: string;
  seatsLeft: number;
  price: number;
  available: boolean;
}

export const InteractiveSeatingPage: React.FC<InteractiveSeatingPageProps> = ({
  onBack,
  onProceedToCheckout,
}) => {
  const [activeLevel, setActiveLevel] = useState<StadiumLevel>('level_2');
  const [ticketQuantity, setTicketQuantity] = useState<number>(2);
  const [selectedSectionId, setSelectedSectionId] = useState<string>('sec-212');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFindingSeats, setIsFindingSeats] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<'cheapest' | 'section'>('cheapest');
  const [expandedTiers, setExpandedTiers] = useState<Record<string, boolean>>({
    level_2: true,
    level_1: false,
    level_3: false,
    gold: false,
    platinum: false,
    skyboxes: false,
    accessible: false,
  });
  const [viewPhotoModal, setViewPhotoModal] = useState<string | null>(null);

  // Available Level 2 Sections from Screenshot From 2026-11-06 16-29-16.png
  const availableSections: SectionInfo[] = [
    {
      id: 'sec-212',
      name: 'Section 212',
      phase: 'Phase 1 - 20,000',
      level: 'Level 2',
      seatsLeft: 356,
      price: 20000,
      available: true,
    },
    {
      id: 'sec-209',
      name: 'Section 209',
      phase: 'Phase 1 - 20,000',
      level: 'Level 2',
      seatsLeft: 358,
      price: 20000,
      available: true,
    },
    {
      id: 'sec-203',
      name: 'Section 203',
      phase: 'Phase 1 - 20,000',
      level: 'Level 2',
      seatsLeft: 359,
      price: 20000,
      available: true,
    },
    {
      id: 'sec-218',
      name: 'Section 218',
      phase: 'Phase 1 - 20,000',
      level: 'Level 2',
      seatsLeft: 358,
      price: 20000,
      available: true,
    },
  ];

  const currentSection = availableSections.find((s) => s.id === selectedSectionId) || availableSections[0];

  const toggleTier = (tierKey: string) => {
    setExpandedTiers((prev) => ({
      ...prev,
      [tierKey]: !prev[tierKey],
    }));
  };

  const handleFindMySeats = () => {
    setIsFindingSeats(true);
    setTimeout(() => {
      setIsFindingSeats(false);
      onProceedToCheckout(currentSection.name, ticketQuantity, currentSection.price);
    }, 900);
  };

  const handleSelectSection = (sec: SectionInfo) => {
    setSelectedSectionId(sec.id);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-slate-900 flex flex-col font-sans select-none">
      {/* Top Header Bar matching Screenshot From 2026-11-06 16-29-16.png */}
      <header className="bg-white border-b border-stone-200 px-4 sm:px-6 h-16 flex items-center justify-between shrink-0 shadow-xs z-30">
        <div className="flex items-center gap-3.5">
          <button
            onClick={onBack}
            className="w-8 h-8 rounded-md hover:bg-stone-100 flex items-center justify-center transition-colors cursor-pointer text-slate-700"
            aria-label="Back"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Square Thumbnail Image matching screenshot */}
          <div className="w-9 h-9 rounded-md overflow-hidden bg-black shrink-0 border border-stone-200">
            <img
              src="/assets/stadium/hero_stadium.png"
              alt="Stadium thumbnail"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-sm font-bold text-slate-900 leading-tight">
              Bayern Munich vs Ajax
            </h1>
            <p className="text-[11px] text-slate-500">
              Tue 5 Jan 2027 · 11:00 · Raila Odinga International Stadium, Nairobi
            </p>
          </div>
        </div>

        {/* Right action icons */}
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
          <button
            title="Share"
            className="p-1 hover:text-black transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-slate-600" />
          </button>
          <button
            title="Toggle theme"
            className="p-1 hover:text-black transition-colors cursor-pointer"
          >
            <Moon className="w-4 h-4 text-slate-600" />
          </button>
          <button
            className="text-xs font-semibold text-slate-800 hover:text-black cursor-pointer"
          >
            Log in
          </button>
        </div>
      </header>

      {/* Main Content: Split into Stadium Map (Left) and Tickets Panel (Right) */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Left: Stadium Seating Map Canvas */}
        <div className="flex-1 bg-[#eaedf2] relative overflow-hidden flex items-center justify-center min-h-[500px] lg:min-h-0">
          {/* Map Controls: Left Top */}
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
            <div className="bg-white rounded-md shadow-md border border-stone-200 overflow-hidden flex flex-col">
              <button
                onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 1.8))}
                className="w-8 h-8 flex items-center justify-center hover:bg-stone-50 border-b border-stone-100 text-slate-700 cursor-pointer"
                title="Zoom in"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 0.7))}
                className="w-8 h-8 flex items-center justify-center hover:bg-stone-50 border-b border-stone-100 text-slate-700 cursor-pointer"
                title="Zoom out"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="w-8 h-8 flex items-center justify-center hover:bg-stone-50 text-slate-700 cursor-pointer"
                title="Reset view"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Compass Indicator matching screenshot */}
            <div className="bg-white px-2 py-1.5 rounded-md shadow-xs border border-stone-200 flex items-center justify-center gap-1 text-[11px] font-bold text-slate-800">
              <span className="text-red-600 text-[10px]">▲</span>
              <span>N</span>
            </div>
          </div>

          {/* Floating Center Message over Stadium: "Tap and zoom to select your seat" */}
          <div className="absolute top-8 z-20 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-md shadow-sm border border-stone-200 text-xs font-semibold text-slate-800 pointer-events-none">
            Tap and zoom to select your seat
          </div>

          {/* Top Right: Level Selector + Legend matching screenshot */}
          <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2">
            {/* Level Tabs (Black pill container) */}
            <div className="bg-[#111317] p-1 rounded-md shadow-md flex items-center gap-1 text-xs font-bold text-white">
              <button
                onClick={() => setActiveLevel('level_1')}
                className={`px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeLevel === 'level_1'
                    ? 'bg-white/20 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                LEVEL 1
              </button>
              <button
                onClick={() => setActiveLevel('level_2')}
                className={`px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeLevel === 'level_2'
                    ? 'bg-white/20 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                LEVEL 2
              </button>
              <button
                onClick={() => setActiveLevel('level_3')}
                className={`px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeLevel === 'level_3'
                    ? 'bg-white/20 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                LEVEL 3
              </button>
            </div>

            {/* Legend underneath Level Tabs */}
            <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-md shadow-xs border border-stone-200 text-[11px] font-medium text-slate-700 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#3b82f6]" />
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#ef4444]" />
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#cbd5e1]" />
                <span>Taken</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#64748b]" />
                <span>Your seats</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#1e293b]" />
                <span>Sold out</span>
              </div>
            </div>
          </div>

          {/* Stadium Bowl SVG Container with Zoom */}
          <div
            className="w-full h-full flex items-center justify-center p-6 transition-transform duration-300"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <div className="relative w-[780px] h-[580px] max-w-full max-h-full">
              {/* Compass Direction Labels: WEST Top, EAST Bottom, SOUTH Left, NORTH Right */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 tracking-widest uppercase">
                WEST
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 tracking-widest uppercase">
                EAST
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-slate-500 tracking-widest uppercase">
                SOUTH
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-xs font-bold text-slate-500 tracking-widest uppercase">
                NORTH
              </div>

              {/* Exact SVG Bowl representation matching Screenshot From 2026-11-06 16-26-54.png */}
              <svg viewBox="0 0 800 600" className="w-full h-full">
                {/* Stadium Outer Ring (Level 3 - Sections 401-435) */}
                <ellipse
                  cx="400"
                  cy="300"
                  rx="370"
                  ry="270"
                  fill="#e2e8f0"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />

                {/* Level 3 Sections perimeter lines and numbers */}
                {/* Dark sold out sections from screenshot: 431, 433, 403, 412, 414, 415 */}
                <path d="M 120 180 Q 200 80 270 60 L 270 120 Q 210 135 150 200 Z" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
                <text x="210" y="110" fill="#ffffff" fontSize="10" fontWeight="bold">433</text>

                <path d="M 60 250 Q 70 160 130 140 L 170 185 Q 120 220 110 270 Z" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
                <text x="110" y="195" fill="#ffffff" fontSize="10" fontWeight="bold">431</text>

                <path d="M 520 60 Q 600 85 660 160 L 610 190 Q 560 130 500 110 Z" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
                <text x="575" y="115" fill="#ffffff" fontSize="10" fontWeight="bold">403</text>

                <path d="M 650 420 Q 600 500 520 540 L 490 480 Q 550 450 590 390 Z" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
                <text x="580" y="475" fill="#ffffff" fontSize="10" fontWeight="bold">412</text>

                <path d="M 460 550 Q 380 565 300 550 L 320 490 Q 380 505 440 490 Z" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
                <text x="385" y="530" fill="#ffffff" fontSize="10" fontWeight="bold">415</text>

                {/* Middle Ring (Level 2 & Skyboxes) */}
                <ellipse
                  cx="400"
                  cy="300"
                  rx="290"
                  ry="200"
                  fill="#f1f5f9"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />

                {/* Inner Ring (Level 1 & Pitch surround) */}
                <ellipse
                  cx="400"
                  cy="300"
                  rx="205"
                  ry="135"
                  fill="#e2e8f0"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />

                {/* Central Football Pitch in Authentic Green with Field Markings */}
                <rect
                  x="260"
                  y="200"
                  width="280"
                  height="200"
                  rx="6"
                  fill="#7db886"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                {/* Halfway line */}
                <line x1="400" y1="200" x2="400" y2="400" stroke="#ffffff" strokeWidth="1.5" />
                {/* Center circle */}
                <circle cx="400" cy="300" r="38" stroke="#ffffff" strokeWidth="1.5" fill="none" />
                <circle cx="400" cy="300" r="2.5" fill="#ffffff" />
                {/* Left Penalty Box (South Goal End) */}
                <rect x="260" y="245" width="45" height="110" stroke="#ffffff" strokeWidth="1.5" fill="none" />
                <circle cx="295" cy="300" r="2" fill="#ffffff" />
                {/* Right Penalty Box (North Goal End) */}
                <rect x="495" y="245" width="45" height="110" stroke="#ffffff" strokeWidth="1.5" fill="none" />
                <circle cx="505" cy="300" r="2" fill="#ffffff" />

                {/* Level 1 specific sold out & VIP sections */}
                {/* Platinum 1 section (Orange #d97706 at West tier) */}
                <g
                  className="cursor-pointer"
                  onClick={() => onProceedToCheckout('Platinum 1', ticketQuantity, 35000)}
                >
                  <rect x="315" y="135" width="55" height="30" rx="3" fill="#d97706" stroke="#b45309" strokeWidth="1" />
                  <text x="320" y="154" fill="#ffffff" fontSize="9" fontWeight="bold">Platinum 1</text>
                </g>

                {/* Regular Platinum */}
                <rect x="375" y="135" width="50" height="30" rx="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
                <text x="382" y="154" fill="#475569" fontSize="9" fontWeight="bold">Platinum</text>

                <rect x="430" y="135" width="55" height="30" rx="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
                <text x="435" y="154" fill="#475569" fontSize="9" fontWeight="bold">Platinum 2</text>

                {/* Level 1 Sold out blocks (Dark Grey 128, 105, 110, 111, 119) */}
                <rect x="345" y="172" width="42" height="24" rx="2" fill="#334155" />
                <text x="357" y="188" fill="#ffffff" fontSize="10" fontWeight="bold">128</text>

                <rect x="480" y="172" width="42" height="24" rx="2" fill="#334155" />
                <text x="492" y="188" fill="#ffffff" fontSize="10" fontWeight="bold">105</text>

                <rect x="560" y="325" width="30" height="42" rx="2" fill="#334155" />
                <text x="566" y="350" fill="#ffffff" fontSize="10" fontWeight="bold">110</text>

                <rect x="560" y="375" width="30" height="42" rx="2" fill="#334155" />
                <text x="566" y="400" fill="#ffffff" fontSize="10" fontWeight="bold">111</text>

                <rect x="235" y="365" width="38" height="28" rx="2" fill="#334155" />
                <text x="245" y="383" fill="#ffffff" fontSize="10" fontWeight="bold">119</text>

                {/* East Tier Gold Sections (Gold F01-F05) */}
                <g fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.8" fontSize="8" fontWeight="bold">
                  <rect x="290" y="440" width="38" height="24" rx="2" />
                  <text x="292" y="455" fill="#475569">Gold F05</text>

                  <rect x="332" y="440" width="38" height="24" rx="2" />
                  <text x="334" y="455" fill="#475569">Gold F04</text>

                  <rect x="374" y="440" width="38" height="24" rx="2" />
                  <text x="376" y="455" fill="#475569">Gold F03</text>

                  <rect x="416" y="440" width="38" height="24" rx="2" />
                  <text x="418" y="455" fill="#475569">Gold F02</text>

                  <rect x="458" y="440" width="38" height="24" rx="2" />
                  <text x="460" y="455" fill="#475569">Gold F01</text>
                </g>

                {/* 4 Available Level 2 Blue Sections matching Screenshot From 2026-11-06 16-29-16.png */}
                {/* 1. Section 218 (Upper-Left Blue) */}
                <g
                  className="cursor-pointer group"
                  onClick={() => handleSelectSection(availableSections[3])}
                >
                  <path
                    d="M 220 155 Q 260 120 300 135 L 285 165 Q 255 150 230 180 Z"
                    fill={selectedSectionId === 'sec-218' ? '#2563eb' : '#3b82f6'}
                    stroke={selectedSectionId === 'sec-218' ? '#1d4ed8' : '#2563eb'}
                    strokeWidth="2"
                    className="hover:opacity-90 transition-all drop-shadow"
                  />
                  <text x="250" y="155" fill="#ffffff" fontSize="12" fontWeight="bold">218</text>
                </g>

                {/* 2. Section 203 (Upper-Right Blue) */}
                <g
                  className="cursor-pointer group"
                  onClick={() => handleSelectSection(availableSections[2])}
                >
                  <path
                    d="M 500 135 Q 545 125 585 160 L 570 190 Q 540 160 488 165 Z"
                    fill={selectedSectionId === 'sec-203' ? '#2563eb' : '#3b82f6'}
                    stroke={selectedSectionId === 'sec-203' ? '#1d4ed8' : '#2563eb'}
                    strokeWidth="2"
                    className="hover:opacity-90 transition-all drop-shadow"
                  />
                  <text x="525" y="155" fill="#ffffff" fontSize="12" fontWeight="bold">203</text>
                </g>

                {/* 3. Section 212 (Lower-Left Blue) */}
                <g
                  className="cursor-pointer group"
                  onClick={() => handleSelectSection(availableSections[0])}
                >
                  <path
                    d="M 215 410 Q 255 455 300 460 L 305 430 Q 260 425 235 390 Z"
                    fill={selectedSectionId === 'sec-212' ? '#2563eb' : '#3b82f6'}
                    stroke={selectedSectionId === 'sec-212' ? '#1d4ed8' : '#2563eb'}
                    strokeWidth="2"
                    className="hover:opacity-90 transition-all drop-shadow"
                  />
                  <text x="255" y="435" fill="#ffffff" fontSize="12" fontWeight="bold">212</text>
                </g>

                {/* 4. Section 209 (Lower-Right Blue) */}
                <g
                  className="cursor-pointer group"
                  onClick={() => handleSelectSection(availableSections[1])}
                >
                  <path
                    d="M 500 460 Q 545 455 585 410 L 565 390 Q 540 425 495 430 Z"
                    fill={selectedSectionId === 'sec-209' ? '#2563eb' : '#3b82f6'}
                    stroke={selectedSectionId === 'sec-209' ? '#1d4ed8' : '#2563eb'}
                    strokeWidth="2"
                    className="hover:opacity-90 transition-all drop-shadow"
                  />
                  <text x="525" y="435" fill="#ffffff" fontSize="12" fontWeight="bold">209</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Bottom Right Label on Canvas: "Scroll to zoom · drag to pan · tap a section" */}
          <div className="absolute bottom-3 right-4 z-20 text-[11px] text-slate-500 font-medium bg-white/70 backdrop-blur-xs px-2.5 py-1 rounded">
            Scroll to zoom · drag to pan · tap a section
          </div>
        </div>

        {/* Right: Tickets Selection Panel matching Screenshot From 2026-11-06 16-29-16.png */}
        <aside className="w-full lg:w-[440px] bg-white border-l border-stone-200 flex flex-col justify-between shrink-0 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Top row: "Tickets" and [- 2 +] Quantity Counter */}
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900">Tickets</h2>
              <div className="flex items-center border border-stone-300 rounded-md overflow-hidden bg-white">
                <button
                  onClick={() => setTicketQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center hover:bg-stone-100 text-slate-700 cursor-pointer transition-colors"
                  aria-label="Decrease tickets"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-9 h-8 flex items-center justify-center font-bold text-sm text-slate-900">
                  {ticketQuantity}
                </span>
                <button
                  onClick={() => setTicketQuantity((q) => Math.min(8, q + 1))}
                  className="w-8 h-8 flex items-center justify-center hover:bg-stone-100 text-slate-700 cursor-pointer transition-colors"
                  aria-label="Increase tickets"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Horizontal Phase Cards (Sold Out Phases) */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              <div className="min-w-[130px] p-3 rounded-md border border-stone-200 bg-stone-50 flex flex-col justify-between opacity-60">
                <span className="text-[11px] text-slate-500 font-medium">Phase 1 - 2,500</span>
                <span className="text-xs font-bold text-slate-600 mt-2">Sold out</span>
              </div>
              <div className="min-w-[130px] p-3 rounded-md border border-stone-200 bg-stone-50 flex flex-col justify-between opacity-60">
                <span className="text-[11px] text-slate-500 font-medium">Phase 1 - 3,500</span>
                <span className="text-xs font-bold text-slate-600 mt-2">Sold out</span>
              </div>
              <div className="min-w-[130px] p-3 rounded-md border border-stone-200 bg-stone-50 flex flex-col justify-between opacity-60">
                <span className="text-[11px] text-slate-500 font-medium">Phase 1 - 5,000</span>
                <span className="text-xs font-bold text-slate-600 mt-2">Sold out</span>
              </div>
            </div>

            {/* Green Action Button: "Find my seats" */}
            <div>
              <button
                onClick={handleFindMySeats}
                disabled={isFindingSeats}
                className="w-full py-3.5 bg-[#15803d] hover:bg-[#166534] active:scale-99 text-white font-bold text-sm rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                {isFindingSeats ? (
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                ) : (
                  <span>Find my seats</span>
                )}
              </button>

              {isFindingSeats && (
                <div className="text-[11px] text-slate-500 text-center mt-2 animate-pulse">
                  Finding {ticketQuantity} seats together in {currentSection.phase}...
                </div>
              )}
            </div>

            {/* "Or choose a section" Heading + 4 sections available + Toggle */}
            <div className="pt-2 border-t border-stone-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    Or choose a section
                  </h3>
                  <p className="text-[11px] text-slate-500">4 sections available</p>
                </div>

                {/* Toggle [Cheapest | Section] */}
                <div className="bg-stone-100 p-0.5 rounded-md flex items-center text-xs font-medium text-slate-700">
                  <button
                    onClick={() => setSortOption('cheapest')}
                    className={`px-3 py-1 rounded text-xs transition-colors cursor-pointer ${
                      sortOption === 'cheapest' ? 'bg-white shadow-xs font-bold text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    Cheapest
                  </button>
                  <button
                    onClick={() => setSortOption('section')}
                    className={`px-3 py-1 rounded text-xs transition-colors cursor-pointer ${
                      sortOption === 'section' ? 'bg-white shadow-xs font-bold text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    Section
                  </button>
                </div>
              </div>

              {/* Accordion Categories matching screenshot */}
              <div className="space-y-2">
                {/* Level 1 (Closed) */}
                <div className="border border-stone-200 rounded-md overflow-hidden bg-white">
                  <button
                    onClick={() => toggleTier('level_1')}
                    className="w-full p-3.5 text-left flex items-center justify-between hover:bg-stone-50 cursor-pointer"
                  >
                    <div>
                      <span className="font-bold text-sm text-slate-900 block leading-tight">Level 1</span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        Sections 101–128 · 28 sections
                      </span>
                      <span className="text-[11px] text-slate-400">Not yet on sale</span>
                    </div>
                    {expandedTiers.level_1 ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>

                {/* Level 2 (Expanded with Section Cards matching Screenshot From 2026-11-06 16-29-16.png) */}
                <div className="border border-stone-300 rounded-md overflow-hidden bg-white shadow-xs">
                  <button
                    onClick={() => toggleTier('level_2')}
                    className="w-full p-3.5 text-left flex items-center justify-between bg-stone-50/70 hover:bg-stone-100/70 cursor-pointer border-b border-stone-200"
                  >
                    <div>
                      <span className="font-bold text-sm text-slate-900 block leading-tight">Level 2</span>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        Sections 203–218 · 4 sections
                      </span>
                      <span className="text-[11px] text-slate-500">1,431 seats left</span>
                    </div>
                    <div className="text-right flex items-center gap-2">
                      <div>
                        <span className="text-[10px] text-slate-400 block">From</span>
                        <span className="text-xs font-bold text-slate-900 block">KSh 20,000</span>
                      </div>
                      {expandedTiers.level_2 ? (
                        <ChevronUp className="w-4 h-4 text-slate-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                  </button>

                  {/* 4 Available Section Cards */}
                  {expandedTiers.level_2 && (
                    <div className="p-2 space-y-2 bg-stone-50/40">
                      {availableSections.map((sec) => {
                        const isSelected = selectedSectionId === sec.id;
                        return (
                          <div
                            key={sec.id}
                            onClick={() => handleSelectSection(sec)}
                            className={`p-3 rounded-md border transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'bg-blue-50/60 border-blue-400 shadow-xs'
                                : 'bg-white border-stone-200 hover:border-stone-300'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {/* Blue Camera Button */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setViewPhotoModal(sec.name);
                                }}
                                className="w-9 h-9 rounded-md bg-[#2563eb] hover:bg-[#1d4ed8] text-white flex items-center justify-center shrink-0 transition-colors shadow-xs"
                                title="View 3D Seat Perspective"
                              >
                                <Camera className="w-4 h-4" />
                              </button>

                              <div>
                                <h4 className="font-bold text-sm text-slate-900 leading-tight">
                                  {sec.name}
                                </h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">
                                  {sec.phase} · {sec.level}
                                </p>
                                <p className="text-[11px] text-slate-500">
                                  {sec.seatsLeft} seats left
                                </p>
                              </div>
                            </div>

                            <div className="text-right">
                              <span className="text-[10px] text-slate-400 block">From</span>
                              <span className="text-xs font-bold text-slate-900 block">
                                KSh {sec.price.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Level 3 */}
                <div className="border border-stone-200 rounded-md overflow-hidden bg-white">
                  <button
                    onClick={() => toggleTier('level_3')}
                    className="w-full p-3.5 text-left flex items-center justify-between hover:bg-stone-50 cursor-pointer"
                  >
                    <div>
                      <span className="font-bold text-sm text-slate-900 block leading-tight">Level 3</span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        Sections 401–435 · 35 sections
                      </span>
                      <span className="text-[11px] text-slate-400">Not yet on sale</span>
                    </div>
                    {expandedTiers.level_3 ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>

                {/* Gold */}
                <div className="border border-stone-200 rounded-md overflow-hidden bg-white">
                  <button
                    onClick={() => toggleTier('gold')}
                    className="w-full p-3.5 text-left flex items-center justify-between hover:bg-stone-50 cursor-pointer"
                  >
                    <div>
                      <span className="font-bold text-sm text-slate-900 block leading-tight">Gold</span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">5 sections</span>
                      <span className="text-[11px] text-slate-400">Not yet on sale</span>
                    </div>
                    {expandedTiers.gold ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>

                {/* Platinum */}
                <div className="border border-stone-200 rounded-md overflow-hidden bg-white">
                  <button
                    onClick={() => toggleTier('platinum')}
                    className="w-full p-3.5 text-left flex items-center justify-between hover:bg-stone-50 cursor-pointer"
                  >
                    <div>
                      <span className="font-bold text-sm text-slate-900 block leading-tight">Platinum</span>
                      <span className="text-[11px] text-slate-500 block mt-0.5">3 sections</span>
                      <span className="text-[11px] text-slate-500">66 seats left</span>
                    </div>
                    {expandedTiers.platinum ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>

                  {expandedTiers.platinum && (
                    <div className="p-2 space-y-2 bg-stone-50/40">
                      <div
                        onClick={() => onProceedToCheckout('Platinum 1', ticketQuantity, 35000)}
                        className="p-3 rounded-md border border-stone-200 bg-white hover:border-amber-400 transition-all cursor-pointer flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <button className="w-9 h-9 rounded-md bg-[#d97706] text-white flex items-center justify-center shrink-0">
                            <Camera className="w-4 h-4" />
                          </button>
                          <div>
                            <h4 className="font-bold text-sm text-slate-900 leading-tight">Platinum 1</h4>
                            <p className="text-[11px] text-slate-500 mt-0.5">VIP Main West Stand</p>
                            <p className="text-[11px] text-emerald-600 font-semibold">24 seats left</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 block">From</span>
                          <span className="text-xs font-bold text-slate-900 block">KSh 35,000</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Skyboxes */}
                <div className="border border-stone-200 rounded-md overflow-hidden bg-white">
                  <button
                    onClick={() => toggleTier('skyboxes')}
                    className="w-full p-3.5 text-left flex items-center justify-between hover:bg-stone-50 cursor-pointer"
                  >
                    <div>
                      <span className="font-bold text-sm text-slate-900 block leading-tight">Skyboxes</span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        Boxes 301–350 · 50 sections
                      </span>
                      <span className="text-[11px] text-slate-400">Not yet on sale</span>
                    </div>
                    {expandedTiers.skyboxes ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>

                {/* Accessible */}
                <div className="border border-stone-200 rounded-md overflow-hidden bg-white">
                  <button
                    onClick={() => toggleTier('accessible')}
                    className="w-full p-3.5 text-left flex items-center justify-between hover:bg-stone-50 cursor-pointer"
                  >
                    <div>
                      <span className="font-bold text-sm text-slate-900 block leading-tight">Accessible</span>
                    </div>
                    {expandedTiers.accessible ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Seat Photo View Modal (Triggered by Camera Icon) */}
      {viewPhotoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-xl w-full overflow-hidden shadow-2xl relative">
            <div className="p-4 bg-stone-900 text-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm">{viewPhotoModal} - Pitch View</h3>
                <p className="text-[11px] text-slate-400">Raila Odinga International Stadium</p>
              </div>
              <button
                onClick={() => setViewPhotoModal(null)}
                className="text-slate-400 hover:text-white px-2 py-1 text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
            <div className="aspect-[16/10] bg-stone-950 overflow-hidden">
              <img
                src="/assets/stadium/carousel_interior.png"
                alt="Spectator perspective"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex items-center justify-between bg-stone-50 text-xs">
              <span className="text-slate-600">Unobstructed direct line of sight to pitch</span>
              <button
                onClick={() => {
                  setViewPhotoModal(null);
                  onProceedToCheckout(viewPhotoModal, ticketQuantity, 20000);
                }}
                className="px-4 py-2 bg-[#15803d] hover:bg-[#166534] text-white font-bold rounded-md cursor-pointer"
              >
                Select {viewPhotoModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
