import { villas } from "@/data/villas";
import { notFound } from "next/navigation";
import { VillaGallery } from "@/components/villa/VillaGallery";
import { BookingSidebar } from "@/components/villa/BookingSidebar";
import { RoadAccessBadge } from "@/components/shared/RoadAccessBadge";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, ShieldCheck, Car } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface PageProps {
    params: { slug: string };
}

export default function VillaDetailPage({ params }: PageProps) {
    const villa = villas.find((v) => v.slug === params.slug);

    if (!villa) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-10">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">{villa.name}</h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
                    <div className="flex items-center">
                        <Star className="w-5 h-5 fill-amber-400 text-amber-500 mr-2" />
                        <span className="font-bold text-slate-900 text-base">{villa.rating}</span>
                        <span className="mx-2 text-slate-300">|</span>
                        <span className="underline decoration-slate-300 hover:text-emerald-700 transition-colors cursor-pointer">{villa.reviewCount} reviews</span>
                    </div>
                    <div className="flex items-center font-medium">
                        <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                        {villa.location}
                    </div>
                    {villa.isVerified && (
                        <div className="flex items-center text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full text-xs">
                            <ShieldCheck className="w-4 h-4 mr-1.5" />
                            Verified by Antivilla
                        </div>
                    )}
                </div>
            </div>

            <VillaGallery images={villa.images} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-8">

                    {/* Description */}
                    <div className="prose max-w-none">
                        <h2 className="text-xl font-semibold mb-3">About this place</h2>
                        <p className="text-slate-600 leading-relaxed">{villa.description}</p>
                    </div>

                    {/* Specs */}
                    <div className="flex gap-6 py-6 border-y border-slate-100">
                        <div>
                            <span className="block font-bold text-lg">{villa.bedrooms}</span>
                            <span className="text-sm text-slate-500">Bedrooms</span>
                        </div>
                        <div>
                            <span className="block font-bold text-lg">{villa.bathrooms}</span>
                            <span className="text-sm text-slate-500">Bathrooms</span>
                        </div>
                        <div>
                            <span className="block font-bold text-lg">{villa.maxGuests}</span>
                            <span className="text-sm text-slate-500">Guests</span>
                        </div>
                    </div>

                    {/* Road Access & Trust */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Road Access Info</h2>
                        <div className="flex items-center gap-3">
                            <RoadAccessBadge access={villa.roadAccess} className="text-sm py-1 px-3" />
                            <span className="text-sm text-slate-500">
                                {villa.roadAccess === "Bus Big" && "Safe for large buses (Big Bird etc). Wide roads."}
                                {villa.roadAccess === "Small Car Only" && "Narrow path. Only Avanza/Brio sized cars."}
                                {villa.roadAccess === "Steep Terrain" && "Expert drivers recommended. steep incline > 30 degrees."}
                            </span>
                        </div>

                        {villa.oddEvenPlatePolicy && (
                            <Alert variant="destructive" className="bg-orange-50 text-orange-900 border-orange-200">
                                <Car className="h-4 w-4" />
                                <AlertTitle>Traffic Warning</AlertTitle>
                                <AlertDescription>
                                    This area is affected by the Odd-Even (Ganjil Genap) policy on weekends. Please check your plate number.
                                </AlertDescription>
                            </Alert>
                        )}
                    </div>

                    {/* Facilities */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {villa.facilities.map(fac => (
                                <div key={fac} className="flex items-center gap-2 text-slate-700">
                                    <Badge variant="outline" className="font-normal">{fac}</Badge>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Sidebar */}
                <div className="relative">
                    <BookingSidebar pricePerNight={villa.pricePerNight} />
                </div>
            </div>
        </div>
    );
}
