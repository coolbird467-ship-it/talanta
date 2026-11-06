import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

interface NoticeBannerProps {
  onLearnMore?: () => void;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({ onLearnMore }) => {
  // Target match date: January 5, 2027 19:30:00 GMT+3 (Nairobi time)
  // Let's compute a realistic countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 424,
    hours: 14,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const targetDate = new Date('2027-01-05T19:30:00+03:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-950/60 via-slate-900/90 to-amber-950/40 border-b border-red-900/40 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 text-xs">
          {/* Official warning message */}
          <div className="flex items-center gap-2.5 text-center lg:text-left">
            <div className="w-6 h-6 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center shrink-0 text-red-400">
              <AlertTriangle className="w-3.5 h-3.5" />
            </div>
            <p className="font-medium text-slate-300">
              <strong className="text-red-400 font-semibold mr-1.5 uppercase tracking-wide">
                Security Advisory:
              </strong>
              No physical ticket sales at stadium gates. Tickets are issued solely via{' '}
              <span className="text-white font-mono font-medium underline underline-offset-2">
                talantasportscity.com
              </span>
              . Beware of fraudulent scalpers. Max 10 tickets per order.
            </p>
          </div>

          {/* Countdown timer */}
          <div className="flex items-center gap-3 shrink-0 bg-slate-950/80 px-3.5 py-1.5 rounded-lg border border-slate-800">
            <span className="text-slate-400 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Kick-off In:
            </span>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-white tabular-nums">
              <div className="flex items-baseline gap-0.5">
                <span className="text-emerald-400 text-sm">{timeLeft.days}</span>
                <span className="text-[10px] text-slate-500 font-normal">d</span>
              </div>
              <span className="text-slate-600">:</span>
              <div className="flex items-baseline gap-0.5">
                <span className="text-slate-200">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[10px] text-slate-500 font-normal">h</span>
              </div>
              <span className="text-slate-600">:</span>
              <div className="flex items-baseline gap-0.5">
                <span className="text-slate-200">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[10px] text-slate-500 font-normal">m</span>
              </div>
              <span className="text-slate-600">:</span>
              <div className="flex items-baseline gap-0.5">
                <span className="text-red-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[10px] text-slate-500 font-normal">s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
