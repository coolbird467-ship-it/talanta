import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const QuestionsSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      q: 'How many tickets can I buy?',
      a: 'Up to 8 per order. If you need more, ask your group to order by wider bigger groups get blocks closer together, for example 5 + 3.',
    },
    {
      q: 'How long are my seats held?',
      a: '15 minutes from purchase. The timer is always on screen while you pay.',
    },
    {
      q: 'How do I get my tickets?',
      a: 'Tickets are exclusively digital. Once payment is confirmed, tickets are sent immediately via SMS with an entry link, via email as a downloadable PDF with dynamic QR codes, and accessible anytime under the "My tickets" section on talantasportscity.com.',
    },
    {
      q: 'Can I sit next to my friends?',
      a: 'Yes. When purchasing tickets, our interactive seating map allows you to select adjacent allocated seats in the same stand and row.',
    },
    {
      q: "What does 'No re-entry' mean?",
      a: 'Once your digital ticket QR code has been scanned at the entrance turnstile and you enter the stadium, you cannot leave and re-enter. Exiting the venue perimeters voids your match pass for the day.',
    },
    {
      q: 'How can I pay?',
      a: 'You can pay using Lipa Na M-Pesa (Online STK Push or Paybill) for mobile money payments, or any major credit/debit card including Visa, Mastercard, and American Express. All payments are encrypted and 100% secure.',
    },
  ];

  return (
    <section id="questions" className="py-16 sm:py-20 bg-[#faf9f6] text-slate-900 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mb-8">
          Questions
        </h2>

        {/* Accordion List matching Screenshot From 2026-11-06 16-29-39.png */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);

            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-stone-200/90 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* "All questions >" link matching video frame */}
        <div className="mt-6">
          <button
            onClick={() => {
              if (openIndices.length === faqs.length) {
                setOpenIndices([]);
              } else {
                setOpenIndices(faqs.map((_, i) => i));
              }
            }}
            className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-700 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>All questions</span>
            <span>&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
};
