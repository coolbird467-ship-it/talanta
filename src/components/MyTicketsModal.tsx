import React, { useState } from 'react';
import { PurchasedTicket } from '../types';
import {
  X,
  Ticket,
  Share2,
  Download,
  Printer,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

interface MyTicketsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tickets: PurchasedTicket[];
  onInitiateTransfer: (ticket: PurchasedTicket) => void;
  currency: 'KES' | 'USD';
}

export const MyTicketsModal: React.FC<MyTicketsModalProps> = ({
  isOpen,
  onClose,
  tickets,
  onInitiateTransfer,
  currency,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'active' | 'transferred'>('active');

  const activeTickets = tickets.filter((t) => !t.isTransferred);
  const transferredTickets = tickets.filter((t) => t.isTransferred);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#0e1420] border border-slate-800 rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
              <Ticket className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                My Digital Match Passes
              </h3>
              <span className="text-[11px] text-slate-400 block font-mono">
                Official Talanta Sports City Ticket Vault
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-4 border-b border-slate-800 flex items-center gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('active')}
            className={`pb-3 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'active'
                ? 'border-red-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Active Passes</span>
            <span className="px-1.5 py-0.5 rounded-full bg-slate-800 text-[10px] text-slate-300 font-mono">
              {activeTickets.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('transferred')}
            className={`pb-3 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'transferred'
                ? 'border-red-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Transferred to Guests</span>
            <span className="px-1.5 py-0.5 rounded-full bg-slate-800 text-[10px] text-slate-300 font-mono">
              {transferredTickets.length}
            </span>
          </button>
        </div>

        {/* Tickets Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'active' && activeTickets.length === 0 && (
            <div className="text-center py-12 px-4">
              <Ticket className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h4 className="text-white font-bold text-sm">No Active Tickets Found</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                You currently have no tickets stored. Select your preferred stands from the match fixture page to secure entry passes.
              </p>
            </div>
          )}

          {activeTab === 'active' &&
            activeTickets.map((ticket) => (
              <div
                key={ticket.ticketId}
                className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-amber-400">
                      {ticket.referenceNumber}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 font-medium">
                      Valid for Entry
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-white uppercase tracking-tight">
                    FC Bayern München vs. AFC Ajax
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                    <span>{ticket.standName}</span>
                    <span>·</span>
                    <span className="text-white font-medium">
                      Row {ticket.row}, Seat {ticket.seatNumber}
                    </span>
                    <span>·</span>
                    <span className="text-emerald-400">{ticket.gate}</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Holder: <span className="text-slate-300">{ticket.attendeeName}</span> (ID: {ticket.attendeeIdNumber})
                  </p>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => onInitiateTransfer(ticket)}
                    className="flex-1 sm:flex-none px-3 py-2 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Share2 className="w-3.5 h-3.5 text-red-400" />
                    <span>Transfer</span>
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>View Pass</span>
                  </button>
                </div>
              </div>
            ))}

          {activeTab === 'transferred' && (
            <div className="space-y-4">
              {transferredTickets.length === 0 ? (
                <div className="text-center py-12 px-4">
                  <p className="text-xs text-slate-400">
                    No tickets have been transferred yet. If you cannot attend, you can transfer your seat digitally to another guest.
                  </p>
                </div>
              ) : (
                transferredTickets.map((ticket) => (
                  <div
                    key={ticket.ticketId}
                    className="bg-slate-950/60 p-5 rounded-xl border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 opacity-80"
                  >
                    <div className="space-y-1">
                      <span className="font-mono text-xs text-slate-500">
                        {ticket.referenceNumber}
                      </span>
                      <h4 className="font-display text-base font-bold text-slate-300 uppercase">
                        {ticket.standName} (Row {ticket.row}, Seat {ticket.seatNumber})
                      </h4>
                      <div className="p-2 bg-slate-900 rounded-lg text-xs text-amber-400 border border-amber-900/40">
                        Transferred to: <strong>{ticket.transferredToName}</strong> ({ticket.transferredToPhone})
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      Ownership Updated on Registry
                    </span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">
            Raila Odinga International Stadium Digital Ticketing Policy
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Close Vault
          </button>
        </div>
      </div>
    </div>
  );
};
