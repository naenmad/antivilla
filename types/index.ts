export type RoadAccess = "Bus Big" | "Small Car Only" | "Steep Terrain";
export type ViewType = "Mountain View" | "City Light" | "Tea Garden" | "Pool View";
export type Facility = "Warm Water Pool" | "Private Pool" | "Karaoke" | "BBQ Tool" | "Wifi" | "Kitchen" | "Billiards";

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}

export interface Villa {
  id: string;
  name: string;
  slug: string;
  location: string;
  description: string;
  pricePerNight: number;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  rating: number;
  reviewCount: number;
  images: string[];

  // Specific Puncak Attributes
  roadAccess: RoadAccess;
  view: ViewType[];
  facilities: Facility[];

  // "Anti-Zonk" Trust features
  isVerified: boolean;
  oddEvenPlatePolicy: boolean; // Ganjil-Genap warning

  reviews?: Review[];

  // Availability Logic for Calendar
  bookedDates: string[]; // ISO Date strings "YYYY-MM-DD"
}

export interface Booking {
  id: string;
  villaId: string;
  userId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  guests: number;
  status: "pending" | "confirmed" | "cancelled";
}
