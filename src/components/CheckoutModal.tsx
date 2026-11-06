import React, { useState, useEffect } from 'react';
import { PurchasedTicket } from '../types';
import {
  X,
  CreditCard,
  Smartphone,
  ShieldCheck,
  Lock,
  ArrowRight,
  Clock,
  Loader2,
  AlertCircle,
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  blockName: string;
  quantity: number;
  pricePerTicket: number;
  onCompleteOrder: (newTickets: PurchasedTicket[]) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  blockName,
  quantity,
  pricePerTicket,
  onCompleteOrder,
}) => {
  if (!isOpen) return null;

  // 15-Minute Countdown Timer matching the official FAQ on the site:
  // "15 minutes from purchase. The timer is always on screen while you pay."
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const [attendee, setAttendee] = useState({
    fullName: 'Japheth Omondi',
    email: 'j.omondi@gmail.com',
    phone: '+254 712 345 678',
    idNumber: '29841029',
  });

  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [mpesaPhone, setMpesaPhone] = useState('0712345678');
  const [stkTriggered, setStkTriggered] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const totalKES = pricePerTicket * quantity;

  const handleSimulatePayment = () => {
    setIsProcessing(true);

    setTimeout(() => {
      const generatedTickets: PurchasedTicket[] = Array.from({ length: quantity }).map((_, idx) => {
        const refCode = `TSC-2027-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${idx + 1}`;
        const rowChar = String.fromCharCode(65 + (idx % 6)); // A, B, C...
        const seatNum = 12 + idx;

        return {
          ticketId: `tkt-${Date.now()}-${idx}`,
          referenceNumber: refCode,
          matchTitle: 'FC Bayern München vs. AFC Ajax',
          matchDate: 'Tuesday, 5 Jan 2027',
          matchTime: '17:30 EAT',
          venue: 'Raila Odinga International Stadium',
          standName: blockName,
          standCategory: 'Official Allocated Pass',
          block: blockName.split(' ')[1] || '105',
          gate: blockName.includes('West') ? 'Gate 1' : 'Gate 6',
          turnstile: `TS-0${(idx % 6) + 1}A`,
          row: rowChar,
          seatNumber: seatNum,
          priceKES: pricePerTicket,
          attendeeName: attendee.fullName,
          attendeePhone: attendee.phone,
          attendeeIdNumber: attendee.idNumber,
          qrCodeUrl: `https://talantasportscity.com/verify/${refCode}`,
          purchasedAt: new Date().toISOString(),
        };
      });

      setIsProcessing(false);
      onCompleteOrder(generatedTickets);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[95vh] text-slate-900 border border-stone-200">
        {/* Header with 15-Minute Countdown Timer matching official site rule */}
        <div className="px-6 py-4 bg-stone-900 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Matchday Checkout</span>
            </div>
            <h3 className="font-display text-xl font-black uppercase tracking-tight text-white">
              Complete Your Reservation
            </h3>
          </div>

          {/* 15-Minute Hold Timer Banner */}
          <div className="flex items-center gap-2 bg-stone-800 px-3 py-1.5 rounded-lg border border-stone-700 text-xs">
            <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="text-stone-400 text-[11px]">Seats held for:</span>
            <span className="font-mono font-bold text-white tabular-nums">
              {formatTimer(secondsLeft)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Order Summary Strip */}
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-xs">
              <div>
                <span className="text-slate-500 block text-[11px] uppercase font-mono">Match Fixture</span>
                <span className="font-bold text-slate-900 text-sm">FC Bayern München vs. AFC Ajax</span>
                <span className="text-slate-500 block text-[11px]">
                  5 Jan 2027 · Raila Odinga International Stadium
                </span>
              </div>
              <div className="text-right">
                <span className="text-slate-500 block text-[11px] uppercase font-mono">Allocation</span>
                <span className="font-bold text-[#15803d] text-sm">
                  {quantity} {quantity === 1 ? 'Seat' : 'Seats'} ({blockName})
                </span>
                <span className="text-slate-500 block text-[11px]">
                  KSh {pricePerTicket.toLocaleString()} each
                </span>
              </div>
            </div>

            <div className="pt-3 flex items-baseline justify-between">
              <span className="text-xs text-slate-600 font-medium">Total Payable:</span>
              <span className="font-mono text-2xl font-black text-slate-900">
                KSh {totalKES.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Attendee Details Form */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#15803d] text-white text-xs flex items-center justify-center font-bold">
                1
              </span>
              <span>Ticket Holder Information</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-600 mb-1 font-medium">Full Name (as on ID)</label>
                <input
                  type="text"
                  value={attendee.fullName}
                  onChange={(e) => setAttendee({ ...attendee, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-slate-900 focus:outline-none focus:border-[#15803d]"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">National ID / Passport Number</label>
                <input
                  type="text"
                  value={attendee.idNumber}
                  onChange={(e) => setAttendee({ ...attendee, idNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-slate-900 focus:outline-none focus:border-[#15803d]"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">Mobile Number (SMS delivery)</label>
                <input
                  type="text"
                  value={attendee.phone}
                  onChange={(e) => setAttendee({ ...attendee, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-slate-900 font-mono focus:outline-none focus:border-[#15803d]"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">Email Address (PDF pass)</label>
                <input
                  type="email"
                  value={attendee.email}
                  onChange={(e) => setAttendee({ ...attendee, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-slate-900 focus:outline-none focus:border-[#15803d]"
                />
              </div>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="space-y-4 pt-2">
            <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#15803d] text-white text-xs flex items-center justify-center font-bold">
                2
              </span>
              <span>Payment Option</span>
            </h4>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <button
                type="button"
                onClick={() => setPaymentMethod('mpesa')}
                className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                  paymentMethod === 'mpesa'
                    ? 'border-[#15803d] bg-emerald-50 text-slate-900 shadow-sm'
                    : 'border-stone-200 bg-white text-slate-600 hover:border-stone-300'
                }`}
              >
                <div className="w-7 h-7 rounded-full bg-[#15803d] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  M
                </div>
                <div className="text-left">
                  <span className="font-bold block">Lipa Na M-Pesa</span>
                  <span className="text-[11px] text-slate-500">STK Push to phone</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'border-[#15803d] bg-emerald-50 text-slate-900 shadow-sm'
                    : 'border-stone-200 bg-white text-slate-600 hover:border-stone-300'
                }`}
              >
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <CreditCard className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="font-bold block">Credit / Debit Card</span>
                  <span className="text-[11px] text-slate-500">Visa, Mastercard</span>
                </div>
              </button>
            </div>

            {/* M-PESA STK Push Simulation */}
            {paymentMethod === 'mpesa' && (
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-[#15803d]" />
                    Safaricom STK Push Prompt
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Paybill: 522522</span>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={mpesaPhone}
                    onChange={(e) => setMpesaPhone(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-stone-300 font-mono text-xs bg-white text-slate-900"
                    placeholder="07XX XXX XXX"
                  />
                  <button
                    type="button"
                    onClick={() => setStkTriggered(true)}
                    className="px-4 py-2 bg-[#15803d] hover:bg-[#166534] text-white font-bold rounded-lg transition-colors text-xs whitespace-nowrap cursor-pointer"
                  >
                    Send STK Push
                  </button>
                </div>

                {/* Simulated Phone Pop-up */}
                {stkTriggered && (
                  <div className="p-3.5 rounded-lg bg-stone-900 text-white space-y-2 animate-scaleUp">
                    <p className="text-xs font-bold text-emerald-400">
                      Simulated phone prompt received:
                    </p>
                    <p className="text-xs font-mono">
                      Do you want to pay KSh {totalKES.toLocaleString()} to TALANTA SPORTS CITY for {quantity} Bayern vs Ajax tickets? Enter M-Pesa PIN:
                    </p>
                    <div className="flex items-center gap-2">
                      <input
                        type="password"
                        maxLength={4}
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        placeholder="••••"
                        className="w-20 px-2 py-1 bg-black border border-stone-600 rounded text-center tracking-widest text-white text-xs font-bold"
                      />
                      <span className="text-[11px] text-stone-400">
                        (Simulation only · No real money deducted)
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={onClose}
            disabled={isProcessing}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleSimulatePayment}
            disabled={isProcessing}
            className="px-6 py-3 bg-[#15803d] hover:bg-[#166534] active:scale-98 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Minting QR Ticket Passes...</span>
              </>
            ) : (
              <>
                <span>Pay KSh {totalKES.toLocaleString()}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
