import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroMatchHeader } from './components/HeroMatchHeader';
import { StadiumSection } from './components/StadiumSection';
import { HospitalitySection } from './components/HospitalitySection';
import { GettingThereSection } from './components/GettingThereSection';
import { QuestionsSection } from './components/QuestionsSection';
import { AboutStadiumPage } from './components/AboutStadiumPage';
import { InteractiveSeatingPage } from './components/InteractiveSeatingPage';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { MyTicketsModal } from './components/MyTicketsModal';
import { TransferTicketModal } from './components/TransferTicketModal';
import { EventInfoSection } from './components/EventInfoSection';
import { TicketConfirmation } from './components/TicketConfirmation';
import { PageView, PurchasedTicket } from './types';

const INITIAL_SAVED_TICKETS: PurchasedTicket[] = [
  {
    ticketId: 'tkt-init-001',
    referenceNumber: 'TSC-2027-FCB-AJX-482019',
    matchTitle: 'FC Bayern München vs. AFC Ajax Amsterdam',
    matchDate: 'Tuesday, 5 Jan 2027',
    matchTime: '17:30 EAT',
    venue: 'Raila Odinga International Stadium',
    standName: 'West Block 105 (Prime)',
    standCategory: 'Official Allocated Pass',
    block: '105',
    gate: 'Gate 1',
    turnstile: 'TS-01A',
    row: 'C',
    seatNumber: 14,
    priceKES: 15000,
    attendeeName: 'Japheth Omondi',
    attendeePhone: '+254 712 345 678',
    attendeeIdNumber: '29841029',
    qrCodeUrl: 'https://talantasportscity.com/verify/TSC-2027-FCB-AJX-482019',
    purchasedAt: '2026-11-05T18:30:00Z',
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('match_info');

  // Checkout modal states
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutBlockName, setCheckoutBlockName] = useState('West Block 105 (Prime)');
  const [checkoutQuantity, setCheckoutQuantity] = useState(2);
  const [checkoutPrice, setCheckoutPrice] = useState(15000);

  // Tickets vault
  const [myTickets, setMyTickets] = useState<PurchasedTicket[]>(() => {
    try {
      const stored = localStorage.getItem('tsc_user_tickets');
      if (stored) return JSON.parse(stored);
    } catch {
      // Fallback
    }
    return INITIAL_SAVED_TICKETS;
  });

  const [recentlyPurchasedTickets, setRecentlyPurchasedTickets] = useState<PurchasedTicket[] | null>(null);
  const [isMyTicketsOpen, setIsMyTicketsOpen] = useState(false);
  const [ticketToTransfer, setTicketToTransfer] = useState<PurchasedTicket | null>(null);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('tsc_user_tickets', JSON.stringify(myTickets));
    } catch {
      // Ignore
    }
  }, [myTickets]);

  const handleOpenSeats = () => {
    setCurrentPage('seats');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProceedToCheckout = (blockName: string, quantity: number, pricePerTicket: number) => {
    setCheckoutBlockName(blockName);
    setCheckoutQuantity(quantity);
    setCheckoutPrice(pricePerTicket);
    setIsCheckoutOpen(true);
  };

  const handleCompleteOrder = (newTickets: PurchasedTicket[]) => {
    setIsCheckoutOpen(false);
    setMyTickets((prev) => [...newTickets, ...prev]);
    setRecentlyPurchasedTickets(newTickets);
  };

  const handleInitiateTransfer = (ticket: PurchasedTicket) => {
    setTicketToTransfer(ticket);
    setIsTransferModalOpen(true);
  };

  const handleConfirmTransfer = (
    ticketId: string,
    recipientName: string,
    recipientPhone: string
  ) => {
    setMyTickets((prev) =>
      prev.map((t) => {
        if (t.ticketId === ticketId) {
          return {
            ...t,
            isTransferred: true,
            transferredToName: recipientName,
            transferredToPhone: recipientPhone,
            transferredAt: new Date().toISOString(),
          };
        }
        return t;
      })
    );

    if (recentlyPurchasedTickets) {
      setRecentlyPurchasedTickets((prev) =>
        prev
          ? prev.map((t) =>
              t.ticketId === ticketId
                ? {
                    ...t,
                    isTransferred: true,
                    transferredToName: recipientName,
                    transferredToPhone: recipientPhone,
                  }
                : t
            )
          : null
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans selection:bg-red-600 selection:text-white flex flex-col">
      {/* View 1: Interactive Seating Map Page */}
      {currentPage === 'seats' ? (
        <InteractiveSeatingPage
          onBack={() => setCurrentPage('match_info')}
          onProceedToCheckout={handleProceedToCheckout}
        />
      ) : (
        <>
          {/* Top Navigation Bar */}
          <Navbar
            currentPage={currentPage}
            onNavigate={handleNavigate}
            myTickets={myTickets.filter((t) => !t.isTransferred)}
            onOpenMyTickets={() => setIsMyTicketsOpen(true)}
            onOpenSeats={handleOpenSeats}
          />

          <main className="flex-1">
            {/* Recently Purchased Ticket Banner */}
            {recentlyPurchasedTickets && recentlyPurchasedTickets.length > 0 && (
              <TicketConfirmation
                tickets={recentlyPurchasedTickets}
                onOpenMyTickets={() => setIsMyTicketsOpen(true)}
                onInitiateTransfer={handleInitiateTransfer}
                onBookMore={() => {
                  setRecentlyPurchasedTickets(null);
                  setCurrentPage('seats');
                }}
              />
            )}

            {/* Page: About the Stadium */}
            {currentPage === 'about' ? (
              <AboutStadiumPage onOpenSeats={handleOpenSeats} />
            ) : (
              /* Exact Homepage Sequence from user videos and screenshots */
              <>
                {/* 1. Hero */}
                <HeroMatchHeader onOpenBuyTickets={handleOpenSeats} />

                {/* 2. Good to know, What's included, Stadium rules (from Screenshot 16-30-14) */}
                <EventInfoSection />

                {/* 3. THE STADIUM */}
                <StadiumSection onOpenAbout={() => handleNavigate('about')} />

                {/* 4. Hospitality */}
                <HospitalitySection onSelectHospitality={() => handleOpenSeats()} />

                {/* 5. Getting there */}
                <GettingThereSection />

                {/* 6. Questions */}
                <QuestionsSection />
              </>
            )}
          </main>

          {/* Official Black Footer matching video */}
          <Footer
            onOpenMyTickets={() => setIsMyTicketsOpen(true)}
            onNavigate={(id) => {
              if (id === 'stadium') {
                setCurrentPage('about');
              } else {
                setCurrentPage('match_info');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </>
      )}

      {/* Simulated Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        blockName={checkoutBlockName}
        quantity={checkoutQuantity}
        pricePerTicket={checkoutPrice}
        onCompleteOrder={handleCompleteOrder}
      />

      {/* My Tickets Vault Modal */}
      <MyTicketsModal
        isOpen={isMyTicketsOpen}
        onClose={() => setIsMyTicketsOpen(false)}
        tickets={myTickets}
        onInitiateTransfer={handleInitiateTransfer}
        currency="KES"
      />

      {/* Transfer Ticket to Guest Modal */}
      <TransferTicketModal
        isOpen={isTransferModalOpen}
        onClose={() => {
          setIsTransferModalOpen(false);
          setTicketToTransfer(null);
        }}
        ticket={ticketToTransfer}
        onConfirmTransfer={handleConfirmTransfer}
      />
    </div>
  );
}
