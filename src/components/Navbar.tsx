import React from 'react';
import { PageView, PurchasedTicket } from '../types';
import { Moon, Sun, Ticket } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  myTickets: PurchasedTicket[];
  onOpenMyTickets: () => void;
  onOpenSeats: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  myTickets,
  onOpenMyTickets,
  onOpenSeats,
}) => {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <header className="sticky top-0 z-50 bg-[#0c0d0e] border-b border-white/10 text-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Official Talanta Sports City Logo with exact Maasai crown emblem */}
        <button
          onClick={() => onNavigate('match_info')}
          className="flex items-center gap-3 group cursor-pointer text-left"
        >
          <img
            src="/assets/stadium/talanta_logo_mark.png"
            alt="Talanta Sports City Logo"
            className="h-6 w-auto object-contain"
          />
          <span className="font-display font-black text-lg sm:text-xl tracking-wider uppercase text-white leading-none">
            TALANTA SPORTS CITY
          </span>
        </button>

        {/* Center: Exact Two Links from the Video ('Match info' and 'About') */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => onNavigate('match_info')}
            className={`transition-colors cursor-pointer py-1 border-b-2 ${
              currentPage === 'match_info'
                ? 'text-white border-white'
                : 'text-slate-400 hover:text-white border-transparent'
            }`}
          >
            Match info
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`transition-colors cursor-pointer py-1 border-b-2 ${
              currentPage === 'about'
                ? 'text-white border-white'
                : 'text-slate-400 hover:text-white border-transparent'
            }`}
          >
            About
          </button>
        </nav>

        {/* Right: Crescent Moon Toggle + 'My tickets' + Green 'Tickets' Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle theme"
            className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
          >
            {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          {myTickets.length > 0 && (
            <button
              onClick={onOpenMyTickets}
              className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <Ticket className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">My tickets ({myTickets.length})</span>
            </button>
          )}

          <button
            onClick={onOpenSeats}
            className="px-4 py-1.5 text-xs font-bold text-white bg-[#15803d] hover:bg-[#166534] rounded-md transition-colors cursor-pointer tracking-wider"
          >
            Tickets
          </button>
        </div>
      </div>
    </header>
  );
};
