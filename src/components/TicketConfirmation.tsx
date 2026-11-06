import React, { useState } from 'react';
import { PurchasedTicket } from '../types';
import {
  CheckCircle2,
  Download,
  Share2,
  Printer,
  Calendar,
  Clock,
  MapPin,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

interface TicketConfirmationProps {
  tickets: PurchasedTicket[];
  onOpenMyTickets: () => void;
  onInitiateTransfer: (ticket: PurchasedTicket) => void;
  onBookMore: () => void;
}

export const TicketConfirmation: React.FC<TicketConfirmationProps> = ({
  tickets,
  onOpenMyTickets,
  onInitiateTransfer,
  onBookMore,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="py-12 bg-[#090d14] border-b border-slate-800 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Success Banner */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center mb-4 shadow-xl shadow-emerald-950/50">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
            Payment & Allocation Successful
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Your Match Tickets Are Confirmed!
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-lg mx-auto">
            Order confirmed. Digital entry passes dispatched via SMS and Email. You can also present the QR code directly from this portal at the turnstiles.
          </p>
        </div>

        {/* Tickets Showcase */}
        <div className="space-y-8 mb-10">
          {tickets.map((ticket, index) => (
            <div
              key={ticket.ticketId}
              className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden relative flex flex-col md:flex-row print:border-black print:text-black"
            >
              {/* Left Ticket Main Section */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800/80">
                <div>
                  {/* Top Bar on Ticket */}
                  <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center text-white font-black text-[10px]">
                        TSC
                      </div>
                      <span className="font-display font-black text-sm uppercase tracking-wider text-white">
                        TALANTA SPORTS CITY
                      </span>
                    </div>
                    <span className="font-mono text-xs text-amber-400 font-bold">
                      {ticket.referenceNumber}
                    </span>
                  </div>

                  {/* Match Fixture Title */}
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-red-500 block mb-0.5">
                    Grand Opening Inaugural Fixture
                  </span>
                  <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">
                    FC Bayern München vs. AFC Ajax
                  </h3>

                  {/* Date, Time, Venue */}
                  <div className="grid grid-cols-2 gap-4 my-4 text-xs">
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-mono">Date & Kickoff</span>
                      <span className="text-white font-semibold block">{ticket.matchDate}</span>
                      <span className="text-slate-400 text-[11px]">{ticket.matchTime} (Gates Open 15:00)</span>
                    </div>

                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-mono">Stadium Venue</span>
                      <span className="text-white font-semibold block">Raila Odinga Stadium</span>
                      <span className="text-slate-400 text-[11px]">Jamhuri Grounds, Ngong Rd, Nairobi</span>
                    </div>
                  </div>

                  {/* Seating Parameters Box */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 grid grid-cols-4 gap-2 text-center text-xs">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Gate</span>
                      <span className="font-display text-base font-black text-emerald-400 uppercase">
                        {ticket.gate}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Turnstile</span>
                      <span className="font-mono text-sm font-bold text-white uppercase">
                        {ticket.turnstile}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Row</span>
                      <span className="font-mono text-lg font-black text-red-400 uppercase">
                        {ticket.row}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Seat</span>
                      <span className="font-mono text-lg font-black text-white uppercase">
                        {ticket.seatNumber}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Attendee Details Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div>
                    <span>Ticket Holder: </span>
                    <strong className="text-white">{ticket.attendeeName}</strong>
                    <span className="mx-1">·</span>
                    <span>ID: {ticket.attendeeIdNumber}</span>
                  </div>
                  <span className="font-mono text-slate-500">Seat {index + 1} of {tickets.length}</span>
                </div>
              </div>

              {/* Right Ticket Stub: Scannable QR Code & Barcode */}
              <div className="p-6 md:p-8 w-full md:w-64 bg-slate-950 flex flex-col items-center justify-between text-center relative">
                {/* Perforation circle cutouts (visual aesthetic) */}
                <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#090d14]" />

                <div className="w-full">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block mb-2">
                    Turnstile Entry QR Code
                  </span>

                  {/* High fidelity SVG QR Code Graphic */}
                  <div className="w-36 h-36 bg-white p-2.5 rounded-xl mx-auto shadow-md flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-black" fill="currentColor">
                      {/* Realistic QR pattern */}
                      <rect x="0" y="0" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
                      <rect x="8" y="8" width="14" height="14" />
                      
                      <rect x="70" y="0" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
                      <rect x="78" y="8" width="14" height="14" />
                      
                      <rect x="0" y="70" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
                      <rect x="8" y="78" width="14" height="14" />

                      {/* Random aesthetic QR blocks */}
                      <rect x="36" y="6" width="6" height="6" />
                      <rect x="46" y="6" width="6" height="12" />
                      <rect x="56" y="10" width="8" height="6" />
                      <rect x="36" y="20" width="16" height="6" />
                      <rect x="4" y="36" width="16" height="6" />
                      <rect x="24" y="36" width="8" height="14" />
                      <rect x="36" y="36" width="28" height="6" />
                      <rect x="68" y="36" width="12" height="12" />
                      <rect x="86" y="36" width="8" height="18" />
                      <rect x="36" y="46" width="12" height="18" />
                      <rect x="54" y="46" width="10" height="8" />
                      <rect x="4" y="56" width="10" height="8" />
                      <rect x="20" y="56" width="12" height="6" />
                      <rect x="68" y="54" width="14" height="10" />
                      <rect x="36" y="70" width="6" height="24" />
                      <rect x="48" y="70" width="14" height="8" />
                      <rect x="68" y="70" width="8" height="14" />
                      <rect x="82" y="70" width="12" height="6" />
                      <rect x="48" y="84" width="26" height="10" />
                      <rect x="80" y="82" width="14" height="12" />
                    </svg>
                  </div>

                  <span className="font-mono text-[10px] text-slate-400 mt-2 block tracking-wider">
                    SCAN AT {ticket.gate.toUpperCase()}
                  </span>
                </div>

                {/* Transfer button */}
                <div className="w-full mt-4 pt-3 border-t border-slate-800">
                  <button
                    onClick={() => onInitiateTransfer(ticket)}
                    className="w-full py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Share2 className="w-3 h-3 text-red-400" />
                    <span>Transfer to a Guest</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-slate-900 rounded-xl border border-slate-800">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print All Passes</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Download PDF Wallet'}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBookMore}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Book Another Section
            </button>
            <button
              onClick={onOpenMyTickets}
              className="px-5 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition-all flex items-center gap-1.5 uppercase tracking-wide"
            >
              <span>View in My Tickets</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
