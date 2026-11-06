import React, { useState } from 'react';
import { StandTier, Seat } from '../types';
import { generateMockSeats } from '../data/mockData';
import { X, Check, Users, ShieldAlert, ArrowRight, Info } from 'lucide-react';

interface SeatPickerModalProps {
  standTier: StandTier | null;
  isOpen: boolean;
  onClose: () => void;
  onProceedToCheckout: (selectedSeats: Seat[]) => void;
  currency: 'KES' | 'USD';
}

export const SeatPickerModal: React.FC<SeatPickerModalProps> = ({
  standTier,
  isOpen,
  onClose,
  onProceedToCheckout,
  currency,
}) => {
  if (!isOpen || !standTier) return null;

  const [seats, setSeats] = useState<Seat[]>(() => generateMockSeats(standTier.id));
  const [selectedSeatIds, setSelectedSeatIds] = useState<string[]>([]);

  const handleToggleSeat = (seat: Seat) => {
    if (seat.status === 'sold_out' || seat.status === 'reserved') return;

    if (selectedSeatIds.includes(seat.id)) {
      setSelectedSeatIds((prev) => prev.filter((id) => id !== seat.id));
    } else {
      if (selectedSeatIds.length >= 10) {
        alert('Official limit: Maximum 10 tickets per customer to avoid scalping.');
        return;
      }
      setSelectedSeatIds((prev) => [...prev, seat.id]);
    }
  };

  const selectedSeats = seats.filter((s) => selectedSeatIds.includes(s.id));
  const subtotalKES = selectedSeats.reduce((acc, s) => acc + s.priceKES, 0);
  const subtotalUSD = selectedSeats.reduce((acc, s) => acc + s.priceUSD, 0);

  // Group seats by row
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#0e1420] border border-slate-800 rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="text-red-400 font-semibold">{standTier.standLocation}</span>
              <span>·</span>
              <span>{standTier.gate}</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Select Allocated Seats: {standTier.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body: Interactive Seating Matrix */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* Pitch indicator */}
          <div className="w-full py-2.5 mb-6 bg-gradient-to-r from-emerald-950 via-emerald-900/60 to-emerald-950 border border-emerald-800/60 rounded-xl text-center text-xs font-bold text-emerald-300 tracking-wider uppercase flex items-center justify-center gap-2">
            <span>⚽</span>
            <span>PITCH DIRECTION · PLAYING FIELD</span>
            <span>⚽</span>
          </div>

          {/* Seat Grid */}
          <div className="space-y-3 min-w-[550px] overflow-x-auto pb-4">
            {rows.map((row) => {
              const rowSeats = seats.filter((s) => s.row === row);

              return (
                <div key={row} className="flex items-center gap-3">
                  <span className="w-6 text-xs font-mono font-bold text-slate-400 text-center">
                    {row}
                  </span>
                  <div className="flex items-center gap-2 flex-1">
                    {rowSeats.map((seat) => {
                      const isSelected = selectedSeatIds.includes(seat.id);
                      const isTaken = seat.status === 'sold_out' || seat.status === 'reserved';

                      return (
                        <button
                          key={seat.id}
                          onClick={() => handleToggleSeat(seat)}
                          disabled={isTaken}
                          title={`Row ${seat.row}, Seat ${seat.number} - ${seat.status}`}
                          className={`w-7 h-8 rounded-t-md text-[10px] font-mono font-semibold flex flex-col items-center justify-center border transition-all ${
                            isSelected
                              ? 'bg-red-600 border-white text-white shadow-lg shadow-red-600/50 scale-105 z-10'
                              : isTaken
                              ? 'bg-slate-800/40 border-slate-800/80 text-slate-600 cursor-not-allowed'
                              : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-white cursor-pointer'
                          }`}
                        >
                          <span>{seat.number}</span>
                        </button>
                      );
                    })}
                  </div>
                  <span className="w-6 text-xs font-mono font-bold text-slate-400 text-center">
                    {row}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-t-sm bg-slate-800 border border-slate-700" />
                <span className="text-slate-300">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-t-sm bg-red-600 border border-white text-white flex items-center justify-center text-[10px]">
                  ✓
                </div>
                <span className="text-white font-medium">Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-t-sm bg-slate-800/40 border border-slate-800/80" />
                <span className="text-slate-500">Reserved / Sold</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
              <Users className="w-3.5 h-3.5 text-amber-400" />
              <span>Purchase Limit: Max 10 Tickets</span>
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer / Order Summary */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 block">
              {selectedSeatIds.length === 0
                ? 'No seats selected yet'
                : `${selectedSeatIds.length} ${
                    selectedSeatIds.length === 1 ? 'Seat' : 'Seats'
                  } Selected (${selectedSeats.map((s) => `${s.row}${s.number}`).join(', ')})`}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-slate-500">Total:</span>
              <span className="font-mono text-2xl font-black text-white tabular-nums">
                {currency === 'KES'
                  ? `KSh ${subtotalKES.toLocaleString()}`
                  : `$${subtotalUSD.toFixed(2)}`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => onProceedToCheckout(selectedSeats)}
              disabled={selectedSeats.length === 0}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                selectedSeats.length === 0
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-950/60 active:scale-98'
              }`}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
