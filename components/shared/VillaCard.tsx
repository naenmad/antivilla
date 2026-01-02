import Link from "next/link";
import Image from "next/image";
import { Villa } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RoadAccessBadge } from "./RoadAccessBadge";
import { MapPin, Star, ShieldCheck } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface VillaCardProps {
    villa: Villa;
}

export function VillaCard({ villa }: VillaCardProps) {
    return (
        <Card className="relative overflow-hidden group border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl bg-white ring-1 ring-slate-100">
            {/* Full Card Link for the background/white space */}
            <Link href={`/villas/${villa.slug}`} className="absolute inset-0 z-0" prefetch={false}>
                <span className="sr-only">View {villa.name}</span>
            </Link>

            <div className="relative aspect-[4/3] overflow-hidden z-10">
                <Carousel className="w-full h-full pointer-events-none">
                    <CarouselContent className="pointer-events-auto">
                        {villa.images.map((img, idx) => (
                            <CarouselItem key={idx}>
                                <Link href={`/villas/${villa.slug}`} className="relative aspect-[4/3] w-full block">
                                    <Image
                                        src={img}
                                        alt={`${villa.name} - Image ${idx + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="absolute inset-x-2 bottom-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto z-20">
                        {/* We use pointer-events-auto on buttons to ensure they are clickable even if container isn't full height */}
                        <CarouselPrevious className="static translate-y-0 bg-white/90 hover:bg-white text-slate-800 border-0 h-9 w-9 shadow-md" />
                        <CarouselNext className="static translate-y-0 bg-white/90 hover:bg-white text-slate-800 border-0 h-9 w-9 shadow-md" />
                    </div>
                </Carousel>

                {/* Anti-Zonk Badge */}
                {villa.isVerified && (
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-emerald-800 shadow-sm z-20">
                        <ShieldCheck className="w-3.5 h-3.5 fill-emerald-100 text-emerald-600" />
                        Verified
                    </div>
                )}
            </div>

            <CardContent className="p-5 relative z-10 pointer-events-none">
                <div className="flex justify-between items-start mb-3 gap-2">
                    <div className="flex-1 min-w-0">
                        {/* Title styled as before but no nested link since the whole card is a link (or transparent to it) */}
                        <div className="group-hover:text-emerald-700 transition-colors block">
                            <h3 className="font-bold text-lg leading-tight truncate text-slate-900 mb-1">{villa.name}</h3>
                        </div>
                        <div className="flex items-center text-slate-500 text-sm">
                            <MapPin className="w-3.5 h-3.5 mr-1 stroke-[2.5]" />
                            <span className="truncate">{villa.location}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 bg-amber-50 px-1.5 py-0.5 rounded-md border border-amber-100">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                        <span className="text-sm font-bold text-amber-700">{villa.rating}</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                    <RoadAccessBadge access={villa.roadAccess} className="text-xs py-0.5" />
                    {villa.view.slice(0, 1).map((v) => (
                        <Badge key={v} variant="secondary" className="text-xs bg-slate-100 text-slate-600 border-0">
                            {v}
                        </Badge>
                    ))}
                    {villa.view.length > 1 && (
                        <span className="text-[10px] font-medium text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded-full">+{villa.view.length - 1}</span>
                    )}
                </div>
            </CardContent>

            <CardFooter className="p-5 pt-0 flex items-end justify-between border-t border-slate-50 mt-1 relative z-10 pointer-events-none">
                <div className="flex flex-col pt-4">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Start from</span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            Rp {villa.pricePerNight.toLocaleString("id-ID")}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">/night</span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
