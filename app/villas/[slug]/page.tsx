import Link from "next/link";
import { villas } from "@/data/villas";
import { notFound } from "next/navigation";
import { VillaGallery } from "@/components/villa/VillaGallery";
import { BookingSidebar } from "@/components/villa/BookingSidebar";
import { RoadAccessBadge } from "@/components/shared/RoadAccessBadge";
import { ShareButton } from "@/components/shared/ShareButton";
import { Badge } from "@/components/ui/badge";
import {
    Star,
    MapPin,
    ShieldCheck,
    Car,
    Bed,
    Bath,
    Users,
    ChevronRight,
    Wifi,
    Tv,
    Utensils,
    Waves
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function VillaDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const villa = villas.find((v) => v.slug === slug);

    if (!villa) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-slate-500 mb-6">
                    <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <Link href="/search" className="hover:text-emerald-700 transition-colors">Stays</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-slate-900 font-medium truncate max-w-[200px]">{villa.name}</span>
                </div>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">{villa.name}</h1>
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-slate-600">
                            <div className="flex items-center font-medium text-slate-900">
                                <Star className="w-5 h-5 fill-amber-400 text-amber-500 mr-1.5" />
                                {villa.rating}
                                <span className="mx-2 text-slate-300">·</span>
                                <span className="underline decoration-slate-300 hover:text-emerald-700 transition-colors cursor-pointer">{villa.reviewCount} reviews</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1.5 text-slate-400" />
                                {villa.location}
                            </div>
                            {villa.isVerified && (
                                <div className="flex items-center text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full text-xs">
                                    <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                                    Verified
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <ShareButton />
                    </div>
                </div>

                <VillaGallery images={villa.images} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    <div className="lg:col-span-2 space-y-10">

                        {/* Specs */}
                        <div className="flex gap-8 py-8 border-y border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-slate-50 rounded-lg">
                                    <Bed className="w-6 h-6 text-slate-700" />
                                </div>
                                <div>
                                    <span className="block font-bold text-lg text-slate-900">{villa.bedrooms}</span>
                                    <span className="text-sm text-slate-500">Bedrooms</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-slate-50 rounded-lg">
                                    <Bath className="w-6 h-6 text-slate-700" />
                                </div>
                                <div>
                                    <span className="block font-bold text-lg text-slate-900">{villa.bathrooms}</span>
                                    <span className="text-sm text-slate-500">Bathrooms</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-slate-50 rounded-lg">
                                    <Users className="w-6 h-6 text-slate-700" />
                                </div>
                                <div>
                                    <span className="block font-bold text-lg text-slate-900">{villa.maxGuests}</span>
                                    <span className="text-sm text-slate-500">Guests</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">About this place</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">{villa.description}</p>
                        </div>

                        {/* Road Access & Trust */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-slate-900">Road Condition & Access</h2>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <div className="flex items-start gap-4">
                                    <RoadAccessBadge access={villa.roadAccess} className="text-sm py-1 px-3 shrink-0" />
                                    <div className="space-y-2">
                                        <p className="font-medium text-slate-900">
                                            {villa.roadAccess === "Bus Big" && "Accessible for Big Buses"}
                                            {villa.roadAccess === "Small Car Only" && "Accessibility Limited to Small Cars"}
                                            {villa.roadAccess === "Steep Terrain" && "Steep Terrain Warning"}
                                        </p>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            {villa.roadAccess === "Bus Big" && "The road is wide and paved. Safe for large groups traveling by Big Bird or similar buses. No steep inclines."}
                                            {villa.roadAccess === "Small Car Only" && "The road is narrow (kurang dari 3 meter). We recommend city cars like Honda Brio or Toyota Avanza. SUV might be tight."}
                                            {villa.roadAccess === "Steep Terrain" && "The path contains inclines greater than 30 degrees. Ensure your vehicle is in top condition and you are an experienced driver."}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {villa.oddEvenPlatePolicy && (
                                <Alert variant="destructive" className="bg-orange-50 text-orange-900 border-orange-200 rounded-xl">
                                    <Car className="h-5 w-5 mt-0.5" />
                                    <div className="ml-2">
                                        <AlertTitle className="font-bold">Traffic Warning: Ganjil Genap</AlertTitle>
                                        <AlertDescription className="text-orange-800/90 mt-1">
                                            This area is affected by the Odd-Even plate policy on weekends and holidays. Please verify your plate number matches the date.
                                        </AlertDescription>
                                    </div>
                                </Alert>
                            )}
                        </div>

                        {/* Location / Maps */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-slate-900">Where you’ll be</h2>
                            <div className="h-[300px] w-full bg-slate-100 rounded-2xl overflow-hidden relative">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    title="map"
                                    marginHeight={0}
                                    marginWidth={0}
                                    scrolling="no"
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(villa.location + " Indonesia")}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                    className="filter grayscale hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-slate-900 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">{villa.location}</h3>
                                    <p className="text-slate-500 text-sm mt-1">Exact location provided after booking.</p>
                                </div>
                            </div>
                        </div>

                        {/* Facilities */}
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 mb-6">What this place offers</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                                {villa.facilities.map(fac => (
                                    <div key={fac} className="flex items-center gap-3 text-slate-700 py-2 border-b border-slate-50 last:border-0 sm:border-0">
                                        {fac.includes("Pool") ? <Waves className="w-5 h-5 text-slate-400" /> :
                                            fac.includes("Wifi") ? <Wifi className="w-5 h-5 text-slate-400" /> :
                                                fac.includes("Kitchen") ? <Utensils className="w-5 h-5 text-slate-400" /> :
                                                    fac.includes("Karaoke") ? <Tv className="w-5 h-5 text-slate-400" /> :
                                                        <Star className="w-5 h-5 text-slate-400" />}
                                        <span className="font-medium">{fac}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="relative">
                        <div className="sticky top-28">
                            <BookingSidebar
                                pricePerNight={villa.pricePerNight}
                                bookedDates={villa.bookedDates}
                                villaName={villa.name}
                                location={villa.location}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
