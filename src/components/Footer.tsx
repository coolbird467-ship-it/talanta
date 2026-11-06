import React from 'react';
import { ShieldCheck, Lock, Ticket } from 'lucide-react';

interface FooterProps {
  onOpenMyTickets: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMyTickets, onNavigate }) => {
  return (
    <footer className="bg-[#0c0d0e] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Architectural Stadium Roof Graphic & Logo matching video */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <img
            src="/assets/stadium/talanta_logo_mark.png"
            alt="Talanta Sports City"
            className="h-10 w-auto object-contain mb-3"
          />

          <h2 className="font-display font-black text-2xl sm:text-3xl tracking-widest uppercase text-white">
            TALANTA SPORTS CITY
          </h2>
        </div>

        {/* 4 Main Footer Navigation Columns matching video frame */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14 text-xs sm:text-sm">
          {/* Col 1: BUY */}
          <div>
            <span className="font-display font-black text-sm uppercase tracking-wider text-slate-300 block mb-3">
              BUY
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Match info
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: HELP */}
          <div>
            <span className="font-display font-black text-sm uppercase tracking-wider text-slate-300 block mb-3">
              HELP
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('stadium')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About the Stadium
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenMyTickets}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  My tickets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('questions')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('questions')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Help and contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('getting-there')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Getting there
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenMyTickets}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Log in
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: LEGAL */}
          <div>
            <span className="font-display font-black text-sm uppercase tracking-wider text-slate-300 block mb-3">
              LEGAL
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#questions" className="hover:text-white transition-colors">
                  Ticketing and Admission Terms
                </a>
              </li>
              <li>
                <a href="#questions" className="hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#questions" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: CONTACT */}
          <div>
            <span className="font-display font-black text-sm uppercase tracking-wider text-slate-300 block mb-3">
              CONTACT
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="mailto:info@talantasportscity.com" className="hover:text-white transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@talantasportscity.com"
                  className="hover:text-white transition-colors font-mono text-xs text-slate-300"
                >
                  info@talantasportscity.com
                </a>
              </li>
              <li>
                <span className="text-slate-400">Ngong Rd, Nairobi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Trust/Verification Cards matching video frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Card 1 */}
          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <strong className="text-white text-xs font-bold block">
                Official ticket seller
              </strong>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                for Bayern Munich vs Ajax at Talanta
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Lock className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <strong className="text-white text-xs font-bold block">
                Secure mobile money and card
              </strong>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                Card details never touch this site
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Ticket className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <strong className="text-white text-xs font-bold block">
                Secure tickets
              </strong>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                By SMS and e-mail, and under My tickets
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row: Copyright & Social Links matching video */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Talanta Sports City · Ngong Rd, Nairobi.</p>

          {/* Social media icons rounded */}
          <div className="flex items-center gap-2">
            {/* Instagram */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* X */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" aria-label="X">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" aria-label="TikTok">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.33a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3 15.61a6.34 6.34 0 0 0 10.82 4.48c.37-.36.68-.78.93-1.24V10.2a8.27 8.27 0 0 0 4.84 1.56V8.31a4.82 4.82 0 0 1 0-1.62z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" aria-label="YouTube">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" aria-label="Facebook">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
