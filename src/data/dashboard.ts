import leadAvatar1 from '../assets/avatars/lead-1.png';
import leadAvatar2 from '../assets/avatars/lead-2.png';
import johnDoe from '../assets/avatars/john-doe.png';
import jessicaChen from '../assets/avatars/jessica-chen.png';
import evanChris from '../assets/avatars/evan-chris.png';
import jackB from '../assets/avatars/jack-b.png';
import emilyParis from '../assets/avatars/emily-paris.png';
import maplewood from '../assets/properties/maplewood-house.png';
import serenity from '../assets/properties/serenity-villa.png';
import rosehill from '../assets/properties/rosehill-cottage.png';
import skyline from '../assets/properties/skyline-edge.png';
import kpiListing from '../assets/icons/kpi-listing.png';
import kpiLeads from '../assets/icons/kpi-leads.png';
import kpiClosed from '../assets/icons/kpi-closed.png';
import kpiRevenue from '../assets/icons/kpi-revenue.png';

export type Trend = 'up' | 'down';

export interface Kpi {
  label: string;
  value: string;
  change: string;
  trend: Trend;
  icon: string;
}

export const KPIS: Kpi[] = [
  { label: 'Active Listing', value: '23', change: '-12%', trend: 'down', icon: kpiListing },
  { label: 'Active Leads', value: '120', change: '+12%', trend: 'up', icon: kpiLeads },
  { label: 'Total Closed', value: '42', change: '+12%', trend: 'up', icon: kpiClosed },
  { label: 'Total Revenue', value: 'Rs.22Cr.', change: '+12%', trend: 'up', icon: kpiRevenue },
];

/** The three developments every deal chart is split by, in stacking order. */
export const DEVELOPMENTS = [
  { name: 'Angel Plaza', color: 'var(--series-1)' },
  { name: 'Angel Garden', color: 'var(--series-2)' },
  { name: 'None', color: 'var(--series-3)' },
] as const;

export interface LeadSourceSlice {
  source: string;
  deals: number;
  share: number; // percent of the ring
  color: string;
}

/** Clockwise from the top of the ring, as drawn in the design. */
export const LEAD_SOURCES: LeadSourceSlice[] = [
  { source: 'Inbound Call', deals: 9, share: 37.87, color: 'var(--series-3)' },
  { source: 'Reference', deals: 1, share: 30.6, color: 'var(--series-1)' },
  { source: 'Facebook', deals: 1, share: 6.78, color: 'var(--series-4)' },
  { source: 'Website', deals: 10, share: 24.83, color: 'var(--series-2)' },
];

export interface StageDeals {
  stage: string;
  /** Record counts per development: [Angel Plaza, Angel Garden, None]. */
  counts: [number, number, number];
}

export const DEALS_BY_STAGE: StageDeals[] = [
  { stage: 'Interested', counts: [2.94, 2.63, 2.34] },
  { stage: 'Site Visit Done', counts: [3.75, 3.38, 2.8] },
  { stage: 'Unit Shortlisted', counts: [3.48, 3.11, 2.73] },
  { stage: 'Contracts Signed', counts: [3.75, 3.38, 2.8] },
  { stage: 'Offer Initiated', counts: [3.14, 2.77, 2.47] },
  { stage: 'Offer Accepted', counts: [3.75, 3.38, 2.8] },
];

export interface OwnerDeals {
  owner: string;
  counts: [number, number, number];
}

export const DEALS_BY_OWNER: OwnerDeals[] = [
  { owner: 'Jessica', counts: [4.91, 6.16, 6.7] },
  { owner: 'Mohit', counts: [2.32, 5.54, 4.19] },
];

export const DEALS_CLOSED = { closed: 42, inProgress: 132 };

export const PIPELINE: { development: string; records: number }[] = [
  { development: 'None', records: 14 },
  { development: 'Angel Plaza', records: 3 },
  { development: 'Angel Garden', records: 1 },
];

export type ListingStatus = 'occupied' | 'available' | 'sold';

export interface Listing {
  name: string;
  image: string;
  type: string;
  units: string;
  price: string;
  leadAvatars: string[];
  extraLeads: number;
  views: number;
  status: { label: string; tone: ListingStatus };
}

const LEAD_FACES = [leadAvatar1, leadAvatar2];

export const ACTIVE_LISTINGS: Listing[] = [
  {
    name: 'Maplewood House',
    image: maplewood,
    type: 'House',
    units: '12',
    price: 'Rs.85L',
    leadAvatars: LEAD_FACES,
    extraLeads: 35,
    views: 125,
    status: { label: '8/12 Occupied', tone: 'occupied' },
  },
  {
    name: 'Serenity Villa',
    image: serenity,
    type: 'Villa',
    units: '9300',
    price: 'Rs.2.8Cr',
    leadAvatars: LEAD_FACES,
    extraLeads: 40,
    views: 930,
    status: { label: 'Available', tone: 'available' },
  },
  {
    name: 'Rosehill Cottage',
    image: rosehill,
    type: 'House',
    units: '25',
    price: 'Rs.1.1Cr',
    leadAvatars: LEAD_FACES,
    extraLeads: 15,
    views: 355,
    status: { label: 'Available', tone: 'available' },
  },
  {
    name: 'Skyline Edge',
    image: skyline,
    type: 'Apartment',
    units: '17',
    price: 'Rs.75L',
    leadAvatars: LEAD_FACES,
    extraLeads: 11,
    views: 425,
    status: { label: 'Sold Out', tone: 'sold' },
  },
];

export interface LeadContact {
  name: string;
  location: string;
  avatar: string;
  phone: string;
}

export const LEAD_CONTACTS: LeadContact[] = [
  { name: 'John Doe', location: 'New York', avatar: johnDoe, phone: '+1 212 555 0142' },
  { name: 'Jessica Chen', location: 'California, LA', avatar: jessicaChen, phone: '+1 213 555 0198' },
  { name: 'Evan Chris', location: 'New York', avatar: evanChris, phone: '+1 646 555 0110' },
  { name: 'Jack B.', location: 'Ohio, Columbus', avatar: jackB, phone: '+1 614 555 0177' },
  { name: 'Emily Paris', location: 'California, LA', avatar: emilyParis, phone: '+1 310 555 0123' },
];

export interface Reminder {
  title: string;
  description: string;
  avatars?: { faces: string[]; extra: number };
}

export const REMINDERS: Reminder[] = [
  {
    title: 'Follow-Ups',
    description: '15 leads need to be followed up.',
    avatars: { faces: [leadAvatar1, leadAvatar2, leadAvatar2, leadAvatar2], extra: 11 },
  },
  { title: 'Submit Final Offer- Villa Deal', description: 'Finalize and send offer documents.' },
  { title: 'Review Contract with Legal', description: 'Ensure attorney reviews apartment deal contract today.' },
  { title: 'Call Jessica Chen – Follow-up', description: 'Discuss her feedback after site visit to Angel Plaza.' },
];

export type ScheduleTone = 'visit' | 'follow-up' | 'submission';

export interface ScheduleItem {
  title: string;
  detail: string;
  tone: ScheduleTone;
}

export const SCHEDULE: ScheduleItem[] = [
  { title: 'Visit Client- Angel Plaza', detail: ' Sector 45, Gurugram, Haryana', tone: 'visit' },
  { title: 'Visit Client – Site Walkthrough', detail: 'Whitefield Road, Bengaluru, Karnataka', tone: 'visit' },
  { title: 'Follow Up – Jessica Chen', detail: 'jessica.chen@email.com', tone: 'follow-up' },
  { title: 'Follow Up – Roger Bouchard', detail: 'roger.bouchard@clientmail.com', tone: 'follow-up' },
  { title: 'Submit Final Offer – Villa Deal', detail: 'Finalize and send offer documents.', tone: 'submission' },
  {
    title: 'Submit Internal Review – Apartment PricingFinal Offer – Villa Deal',
    detail: 'Update CRM with latest market rates.',
    tone: 'submission',
  },
];

/** Calendar markers keyed by day of month (July 2025). */
export const CALENDAR = {
  year: 2025,
  month: 6, // July, zero-based
  today: 8,
  marks: { 10: 'visit', 11: 'submission', 14: 'follow-up' } as Record<number, ScheduleTone>,
};
