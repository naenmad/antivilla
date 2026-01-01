import { Villa } from "@/types";

export const villas: Villa[] = [
    {
        id: "1",
        name: "Villa Puncak Pass Resort",
        slug: "villa-puncak-pass",
        location: "Puncak Pass, Bogor",
        description: "Experience the cool breeze and breathtaking mountain views at Puncak Pass. This classic villa offers a blend of heritage charm and modern comfort, perfect for families looking to escape the city heat.",
        pricePerNight: 2500000,
        bedrooms: 3,
        bathrooms: 2,
        maxGuests: 8,
        rating: 4.8,
        reviewCount: 124,
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        roadAccess: "Bus Big",
        view: ["Mountain View", "Tea Garden"],
        facilities: ["Warm Water Pool", "Wifi", "Kitchen", "BBQ Tool"],
        isVerified: true,
        oddEvenPlatePolicy: true,
        reviews: []
    },
    {
        id: "2",
        name: "Little Venice Kota Bunga",
        slug: "little-venice-kota-bunga",
        location: "Cipanas, Cianjur",
        description: "A colorful, european-style villa located within the famous Kota Bunga estate. Walking distance to Little Venice. Great for photos and family fun.",
        pricePerNight: 1200000,
        bedrooms: 2,
        bathrooms: 1,
        maxGuests: 6,
        rating: 4.5,
        reviewCount: 89,
        images: [
            "https://images.unsplash.com/photo-1600596542815-2495db98dada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        roadAccess: "Bus Big",
        view: ["City Light"],
        facilities: ["Kitchen", "Wifi", "BBQ Tool"],
        isVerified: true,
        oddEvenPlatePolicy: false,
        reviews: []
    },
    {
        id: "3",
        name: "Hidden Hills Sanctuary",
        slug: "hidden-hills-sanctuary",
        location: "Cisarua, Bogor",
        description: "Secluded sanctuary with a private infinity pool overlooking the tea gardens. ideal for couples or small groups seeking absolute privacy. Note: The road is a bit steep but worth the view.",
        pricePerNight: 3500000,
        bedrooms: 2,
        bathrooms: 2,
        maxGuests: 4,
        rating: 4.9,
        reviewCount: 42,
        images: [
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        roadAccess: "Steep Terrain",
        view: ["Mountain View", "City Light", "Tea Garden"],
        facilities: ["Private Pool", "Warm Water Pool", "Billiards", "Wifi", "Karaoke"],
        isVerified: true,
        oddEvenPlatePolicy: true,
        reviews: []
    },
    {
        id: "4",
        name: "Gathering House Cilember",
        slug: "gathering-house-cilember",
        location: "Cilember, Bogor",
        description: "Huge villa designed for gathering. Features a large hall, expansive garden, and parking for 5 cars. Road is narrow, best for small cars or Elf.",
        pricePerNight: 4500000,
        bedrooms: 5,
        bathrooms: 4,
        maxGuests: 20,
        rating: 4.6,
        reviewCount: 210,
        images: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        roadAccess: "Small Car Only",
        view: ["Mountain View"],
        facilities: ["Karaoke", "Billiards", "BBQ Tool", "Kitchen", "Wifi"],
        isVerified: true,
        oddEvenPlatePolicy: true,
        reviews: []
    }
];
