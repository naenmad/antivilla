import { villas } from "@/data/villas";
import { VillaCard } from "@/components/shared/VillaCard";
import { FilterSidebar } from "@/components/search/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";

export default function SearchPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row gap-10">

                {/* Mobile Filter Trigger */}
                <div className="md:hidden mb-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="w-full h-12 flex justify-between border-slate-300">
                                <span className="font-medium text-slate-700">Filters & Sort</span>
                                <SlidersHorizontal className="h-4 w-4 text-slate-500" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[540px] overflow-y-auto">
                            <FilterSidebar />
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop Sidebar */}
                <div className="hidden md:block w-72 flex-shrink-0">
                    <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                        <FilterSidebar />
                    </div>
                </div>

                {/* Results Grid */}
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                            Stays in Puncak <span className="text-slate-500 text-lg font-normal ml-2">({villas.length}+ verified homes)</span>
                        </h1>
                        <div className="hidden md:block">
                            {/* Sort dropdown could go here */}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {villas.map((villa) => (
                            <VillaCard key={villa.id} villa={villa} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
