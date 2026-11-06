import React, { useState } from 'react';
import { PurchasedTicket } from '../types';
import { X, Share2, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';

interface TransferTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticket: PurchasedTicket | null;
  onConfirmTransfer: (ticketId: string, recipientName: string, recipientPhone: string) => void;
}

export const TransferTicketModal: React.FC<TransferTicketModalProps> = ({
  isOpen,
  onClose,
  ticket,
  onConfirmTransfer,
}) => {
  if (!isOpen || !ticket) return null;

  const [recipientName, setRecipientName] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('+254 7');
  const [confirmNotice, setConfirmNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientName.trim() || recipientPhone.length < 10) {
      alert('Please enter a valid recipient name and Kenyan mobile number.');
      return;
    }
    if (!confirmNotice) {
      alert('Please confirm that you understand this action permanently transfers your entry barcode.');
      return;
    }

    onConfirmTransfer(ticket.ticketId, recipientName, recipientPhone);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#0e1420] border border-slate-800 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-xl font-black text-white uppercase tracking-tight">
                Transfer Ticket to Guest
              </h3>
              <span className="text-[11px] font-mono text-slate-400">
                Official Digital Transfer Policy
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

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          {/* Target Ticket Details */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-slate-400">Ref: {ticket.referenceNumber}</span>
              <span className="text-emerald-400 font-bold">{ticket.gate}</span>
            </div>
            <h4 className="font-display text-base font-bold text-white uppercase">
              FC Bayern München vs AFC Ajax
            </h4>
            <p className="text-slate-300">
              {ticket.standName} · Row {ticket.row}, Seat {ticket.seatNumber}
            </p>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">
              Recipient's Full Legal Name (as per National ID)
            </label>
            <input
              type="text"
              required
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="e.g. Grace Wanjiku Kariuki"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">
              Recipient's Kenyan Mobile Number (for SMS QR Code Pass)
            </label>
            <input
              type="text"
              required
              value={recipientPhone}
              onChange={(e) => setRecipientPhone(e.target.value)}
              placeholder="+254 7XX XXX XXX"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Official Rule Notice */}
          <div className="p-3.5 bg-amber-950/40 rounded-xl border border-amber-900/60 text-amber-200/90 text-[11px] space-y-1">
            <div className="flex items-center gap-1.5 font-bold uppercase text-amber-400">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Official Transfer Invalidation Notice</span>
            </div>
            <p>
              Once transferred, your previous QR code will be permanently deactivated. The new digital ticket will be registered solely under the recipient's phone number and National ID.
            </p>
          </div>

          <label className="flex items-start gap-2 text-slate-300 cursor-pointer pt-2">
            <input
              type="checkbox"
              required
              checked={confirmNotice}
              onChange={(e) => setConfirmNotice(e.target.checked)}
              className="mt-0.5 rounded border-slate-700 text-red-600 focus:ring-red-500"
            />
            <span className="text-[11px] leading-relaxed">
              I authorize the digital reassignment of this ticket to the named recipient.
            </span>
          </label>

          <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-display font-black uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <span>Authorize Digital Transfer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
