import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, CalendarDays, MapPin } from "lucide-react";
import { format } from "date-fns";
import clsx from "clsx";

export function Hero() {
    return (
        <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Puncak Scenery"
                    className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/30" />
            </div>

            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-[-40px]">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl">
                    Escape to Puncak, <br className="hidden md:block" />
                    <span className="text-emerald-400">Worry-Free.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-md">
                    Discover verified villas with transparent road access info. <br className="hidden md:block" /> No hidden steep roads, no fake listings.
                </p>

                {/* Floating Search Bar */}
                <div className="bg-white p-3 rounded-full shadow-2xl flex flex-col md:flex-row gap-2 w-full max-w-4xl transition-all hover:scale-[1.01] duration-300">
                    <div className="flex-1 flex items-center px-6 md:border-r border-slate-100 h-14 md:h-auto">
                        <MapPin className="w-5 h-5 text-emerald-600 mr-4" />
                        <div className="text-left w-full">
                            <p className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Location</p>
                            <input
                                type="text"
                                placeholder="Where to?"
                                className="w-full text-sm font-medium outline-none text-slate-700 placeholder:text-slate-400 bg-transparent"
                                defaultValue="Puncak, Bogor"
                            />
                        </div>
                    </div>

                    <div className="flex-1 flex items-center px-6 md:border-r border-slate-100 h-14 md:h-auto border-t md:border-t-0 border-dashed">
                        <CalendarDays className="w-5 h-5 text-emerald-600 mr-4" />
                        <div className="text-left w-full">
                            <p className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Check In</p>
                            <p className="text-sm font-medium text-slate-400 cursor-pointer hover:text-slate-700">Add dates</p>
                        </div>
                    </div>

                    <div className="flex-1 flex items-center px-6 h-14 md:h-auto border-t md:border-t-0 border-dashed">
                        <div className="text-left w-full pl-2">
                            <p className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Guests</p>
                            <input
                                type="number"
                                placeholder="Add guests"
                                className="w-full text-sm font-medium outline-none text-slate-700 placeholder:text-slate-400 bg-transparent"
                            />
                        </div>
                    </div>

                    <Button size="icon" className="h-14 w-14 rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-lg shrink-0" asChild>
                        <Link href="/search">
                            <Search className="w-6 h-6 text-white" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
