import React from 'react';

interface AboutStadiumPageProps {
  onOpenSeats: () => void;
}

export const AboutStadiumPage: React.FC<AboutStadiumPageProps> = ({ onOpenSeats }) => {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Banner with Night Stadium Photography matching exact video */}
      <section className="relative bg-[#0c0d0e] text-white overflow-hidden py-16 md:py-20 border-b border-white/10">
        <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none">
          <img
            src="/assets/stadium/hospitality_gold.png"
            alt="Raila Odinga International Stadium illuminated at night"
            className="w-full md:w-3/5 h-full object-cover object-center opacity-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d0e] via-[#0c0d0e]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-none">
            ABOUT THE STADIUM
          </h1>
        </div>
      </section>

      {/* Main Prose Content with exact wording from talantasportscity.com/about */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-6 text-base text-slate-800 leading-relaxed font-normal">
        <p>
          The Raila Odinga International Stadium at Talanta Sports City is a 60,000-seat venue designed to welcome the world&apos;s best athletes, leading international competitions, live entertainment and the fans who make every occasion extraordinary.
        </p>

        <p>
          It represents Kenya&apos;s ambition to build a lasting home for major events. From international football fixtures and continental tournaments to concerts and major cultural celebrations, the stadium is intended to provide a stage for events that capture the imagination of audiences in Kenya and beyond.
        </p>

        <p>
          It bears the name of the late Rt. Hon. Raila Amolo Odinga, former Prime Minister of the Republic of Kenya, in recognition of his contribution to Kenya&apos;s democratic journey and national development. Its name connects a new national landmark to a legacy of public service, resilience and belief in Kenya&apos;s potential.
        </p>

        <p>
          As future generations of athletes and supporters make their own memories here, the stadium will stand as a reminder of the power of shared ambition and national purpose.
        </p>

        <div className="pt-6">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight mb-4">
            A home for generations
          </h2>
          <p className="mb-6">
            Great stadiums are remembered for the events they host and for the memories they create. They are places where children discover their heroes, families celebrate together, athletes achieve lifelong dreams and communities share moments that endure.
          </p>
        </div>

        <div className="pt-6">
          <button
            onClick={onOpenSeats}
            className="px-6 py-3 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer shadow-sm"
          >
            Select tickets
          </button>
        </div>
      </article>
    </div>
  );
};
