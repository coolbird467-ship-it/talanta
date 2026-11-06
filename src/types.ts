export type PageView = 'match_info' | 'about' | 'seats';

export type StadiumLevel = 'level_1' | 'level_2' | 'level_3';

export type StandId =
  | 'north_upper'
  | 'north_lower'
  | 'south_upper'
  | 'south_lower'
  | 'east_upper'
  | 'east_lower'
  | 'west_lower'
  | 'west_vip'
  | 'platinum_skybox';

export interface StandTier {
  id: StandId;
  name: string;
  category: string;
  standLocation: string;
  priceKES: number;
  priceUSD: number;
  description: string;
  gate: string;
  turnstile: string;
  soldOut: boolean;
  totalSeats: number;
  availableSeats: number;
  accentColor: string;
  perks: string[];
}

export interface Seat {
  id: string;
  standId: StandId;
  standName: string;
  row: string;
  number: number;
  priceKES: number;
  priceUSD: number;
  status: 'available' | 'reserved' | 'sold_out' | 'selected';
}

export interface MatchDetails {
  title: string;
  subtitle: string;
  competition: string;
  matchDate: string;
  matchTime: string;
  gatesOpenTime: string;
  venue: string;
  city: string;
  stadiumCapacity: number;
  homeTeam: {
    name: string;
    shortName: string;
    country: string;
    founded: number;
    color: string;
    textColor: string;
    code: string;
  };
  awayTeam: {
    name: string;
    shortName: string;
    country: string;
    founded: number;
    color: string;
    textColor: string;
    code: string;
  };
}

export interface StadiumBlock {
  id: string;
  number: string;
  name: string;
  level: StadiumLevel;
  stand: 'WEST' | 'EAST' | 'NORTH' | 'SOUTH';
  category: 'Standard' | 'Prime' | 'VIP' | 'Gold' | 'Platinum' | 'Skybox';
  priceKES: number;
  available: number;
  soldOut: boolean;
  color: string;
}

export interface PurchasedTicket {
  ticketId: string;
  referenceNumber: string;
  matchTitle: string;
  matchDate: string;
  matchTime: string;
  venue: string;
  standName: string;
  standCategory: string;
  block?: string;
  gate: string;
  turnstile: string;
  row: string;
  seatNumber: number;
  priceKES: number;
  priceUSD?: number;
  attendeeName: string;
  attendeePhone: string;
  attendeeIdNumber: string;
  qrCodeUrl: string;
  purchasedAt: string;
  isTransferred?: boolean;
  transferredToName?: string;
  transferredToPhone?: string;
  transferredAt?: string;
}
