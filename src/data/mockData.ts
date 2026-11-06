import { MatchDetails, StandTier, Seat, StandId } from '../types';

export const MATCH_INFO: MatchDetails = {
  title: 'FC Bayern München vs. AFC Ajax Amsterdam',
  subtitle: 'Grand Opening & Inauguration Match · Raila Odinga International Stadium',
  competition: 'International Inaugural Exhibition Trophy',
  matchDate: 'Tuesday, 5 January 2027',
  matchTime: '19:30 EAT',
  gatesOpenTime: '15:00 EAT',
  venue: 'Raila Odinga International Stadium (Talanta Sports City)',
  city: 'Jamhuri Grounds, Ngong Road, Nairobi, Kenya',
  stadiumCapacity: 60000,
  homeTeam: {
    name: 'FC Bayern München',
    shortName: 'Bayern',
    country: 'Germany',
    founded: 1900,
    color: '#DC052D',
    textColor: '#FFFFFF',
    code: 'FCB',
  },
  awayTeam: {
    name: 'AFC Ajax Amsterdam',
    shortName: 'Ajax',
    country: 'Netherlands',
    founded: 1900,
    color: '#D2122E',
    textColor: '#FFFFFF',
    code: 'AJX',
  },
};

export const STAND_TIERS: StandTier[] = [
  {
    id: 'north_upper',
    name: 'North Stand (Upper Tier)',
    category: 'Category 4 - Regular',
    standLocation: 'North Stand',
    priceKES: 2500,
    priceUSD: 19.5,
    description: 'Elevated panoramic views behind the north goal. Dedicated active fan section.',
    gate: 'Gate 4 (Turnstiles 1-6)',
    turnstile: 'TS-04A',
    soldOut: true,
    totalSeats: 12000,
    availableSeats: 0,
    accentColor: '#3b82f6',
    perks: ['Reserved individual stadium seat', 'Access to concourse refreshment stations', 'Designated Entry Gate 4'],
  },
  {
    id: 'south_upper',
    name: 'South Stand (Upper Tier)',
    category: 'Category 4 - Regular',
    standLocation: 'South Stand',
    priceKES: 2500,
    priceUSD: 19.5,
    description: 'Atmospheric upper stand behind south goal, adjacent to family gathering points.',
    gate: 'Gate 7 (Turnstiles 1-6)',
    turnstile: 'TS-07B',
    soldOut: true,
    totalSeats: 12000,
    availableSeats: 0,
    accentColor: '#3b82f6',
    perks: ['Numbered bucket seating', 'Close proximity to public transit plaza', 'Designated Entry Gate 7'],
  },
  {
    id: 'north_lower',
    name: 'North Stand (Lower Tier)',
    category: 'Category 3 - Standard',
    standLocation: 'North Stand',
    priceKES: 3500,
    priceUSD: 27.0,
    description: 'Intense pitchside goal perspective. Feel every shot and celebration up close.',
    gate: 'Gate 3 (Turnstiles 1-8)',
    turnstile: 'TS-03B',
    soldOut: true,
    totalSeats: 8000,
    availableSeats: 0,
    accentColor: '#0ea5e9',
    perks: ['Pitch-level sightlines', 'Expedited biometric turnstile access', 'Direct field tunnel proximity'],
  },
  {
    id: 'east_upper',
    name: 'East Stand (Upper Tier)',
    category: 'Category 3 - Standard Plus',
    standLocation: 'East Stand',
    priceKES: 3500,
    priceUSD: 27.0,
    description: 'High sideline vantage point overseeing the entire tactical pitch formation.',
    gate: 'Gate 5 (Turnstiles 1-10)',
    turnstile: 'TS-05A',
    soldOut: true,
    totalSeats: 9000,
    availableSeats: 0,
    accentColor: '#0ea5e9',
    perks: ['Full tactical field coverage', 'Easy access to Jamhuri Park exit corridors', 'Food & beverage kiosks'],
  },
  {
    id: 'east_lower',
    name: 'East Stand (Lower Tier Midfield)',
    category: 'Category 2 - Prime Sideline',
    standLocation: 'East Stand',
    priceKES: 5000,
    priceUSD: 39.0,
    description: 'Direct sideline views facing the players tunnel and team benches.',
    gate: 'Gate 6 (Turnstiles 1-8)',
    turnstile: 'TS-06C',
    soldOut: false,
    totalSeats: 8500,
    availableSeats: 18,
    accentColor: '#10b981',
    perks: ['Prime central sideline seats', 'High-definition replay screen sightline', 'Dedicated security corridor'],
  },
  {
    id: 'west_lower',
    name: 'West Grandstand (Lower Tier Prime)',
    category: 'Category 1 - Premium Grandstand',
    standLocation: 'West Grandstand',
    priceKES: 15000,
    priceUSD: 115.0,
    description: 'Main grandstand seating directly behind substitute benches and media box.',
    gate: 'Gate 1 (Main Grandstand Entry)',
    turnstile: 'TS-01A',
    soldOut: false,
    totalSeats: 5000,
    availableSeats: 142,
    accentColor: '#f59e0b',
    perks: ['Under-canopy weather protection', 'Commemorative matchday program', 'Fast-track security checkpoint'],
  },
  {
    id: 'west_vip',
    name: 'West Grandstand VIP Club Lounge',
    category: 'VIP Club Experience',
    standLocation: 'West Grandstand',
    priceKES: 20000,
    priceUSD: 155.0,
    description: 'Executive padded armchairs, access to air-conditioned hospitality lounge with hot buffet.',
    gate: 'VIP Gate A (Red Carpet)',
    turnstile: 'VIP-01',
    soldOut: false,
    totalSeats: 3000,
    availableSeats: 64,
    accentColor: '#ec4899',
    perks: [
      'Padded executive club seating',
      'All-inclusive pre-match & halftime buffet',
      'Complimentary welcome drinks & tea',
      'VIP secure parking pass (1 pass per 2 tickets)',
    ],
  },
  {
    id: 'platinum_skybox',
    name: 'Presidential Skybox & Platinum Suite',
    category: 'VVIP Presidential Hospitality',
    standLocation: 'Skybox Level',
    priceKES: 50000,
    priceUSD: 385.0,
    description: 'Private 12-person glass-fronted skybox, private attendant, sommelier service, exclusive pitch balcony.',
    gate: 'Presidential Gate P (Helipad & Valet)',
    turnstile: 'VVIP-DIRECT',
    soldOut: false,
    totalSeats: 500,
    availableSeats: 12,
    accentColor: '#8b5cf6',
    perks: [
      'Private glass-enclosed luxury box',
      'Gourmet 5-course international dinner',
      'Dedicated private butler & concierge',
      'Meet-and-greet opportunity with club ambassadors',
      'VVIP Valet Parking at Gate P',
    ],
  },
];

// Helper to generate simulated seats for a stand
export function generateMockSeats(standId: StandId): Seat[] {
  const tier = STAND_TIERS.find((t) => t.id === standId);
  if (!tier) return [];

  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatsPerRow = 14;
  const seats: Seat[] = [];

  rows.forEach((row, rowIndex) => {
    for (let num = 1; num <= seatsPerRow; num++) {
      const id = `${standId}-${row}${num}`;
      
      let status: 'available' | 'reserved' | 'sold_out' | 'selected' = 'available';
      if (tier.soldOut) {
        status = 'sold_out';
      } else {
        // Deterministic pseudo-random pattern based on position
        const hash = (rowIndex * 31 + num * 17) % 10;
        if (hash === 1 || hash === 4 || hash === 7) {
          status = 'reserved';
        } else if (hash === 2 && tier.id === 'east_lower') {
          status = 'sold_out';
        }
      }

      seats.push({
        id,
        standId,
        standName: tier.name,
        row,
        number: num,
        priceKES: tier.priceKES,
        priceUSD: tier.priceUSD,
        status,
      });
    }
  });

  return seats;
}

export const STADIUM_RULES = [
  {
    title: 'Exclusively Digital Tickets',
    text: 'There will be NO ticket sales booths or physical collection points at Raila Odinga International Stadium on match day. All entry is via unique digital QR code on your mobile device.',
  },
  {
    title: 'Strict No Re-Entry Policy',
    text: 'Once your digital ticket barcode is scanned at the turnstile, leaving the stadium perimeter invalidates the pass. Re-entry will not be permitted under any circumstances.',
  },
  {
    title: 'One Ticket Per Attendee',
    text: 'Every individual entering the venue, including children of all ages, must have an individual allocated seat and valid digital pass.',
  },
  {
    title: 'Safe Digital Transfers',
    text: 'Unable to make it? Use the official "Transfer Ticket to a Guest" tool on talantasportscity.com by providing the recipient\'s full name and registered phone number.',
  },
  {
    title: 'Gates Opening Time',
    text: 'Gates open early at 15:00 EAT (4.5 hours ahead of kickoff) for opening ceremonies, music entertainment, and security processing. Please arrive early.',
  },
  {
    title: 'Transport & Parking',
    text: 'Designated Park & Ride hubs available along Ngong Road and Jamhuri Park with dedicated electric shuttle links to the stadium gates.',
  },
];

export const FAQS = [
  {
    q: 'How do I receive my tickets after purchasing?',
    a: 'Immediately after M-Pesa or card confirmation, your tickets are generated and stored in your "My Tickets" tab. You will also receive an SMS confirmation code and an email with your downloadable passes.',
  },
  {
    q: 'Can I pay via M-Pesa?',
    a: 'Yes, Lipa Na M-Pesa STK push is the primary and recommended payment method for Kenyan residents. You can also pay with Visa, Mastercard, or American Express.',
  },
  {
    q: 'What is the maximum number of tickets I can purchase?',
    a: 'To guarantee fair access and prevent scalping, each transaction is capped at a maximum of 10 tickets per customer.',
  },
  {
    q: 'Are tickets refundable?',
    a: 'Tickets are non-refundable in accordance with official stadium ticketing policy, unless the match is officially canceled by organisers. However, tickets can be transferred digitally to another guest free of charge.',
  },
  {
    q: 'Is there parking available at Raila Odinga International Stadium?',
    a: 'Standard ticket holders are encouraged to utilize Park & Ride shuttle points at Jamhuri Grounds. VIP and Platinum ticket holders receive dedicated reserved parking at Gate 1 & Gate P.',
  },
];
