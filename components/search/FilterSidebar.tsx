"use client";

import { RoadAccess, ViewType, Facility } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function FilterSidebar({ className }: { className?: string }) {
    // Mock event handlers for now
    const handleFilterChange = (type: string, value: string) => {
        console.log(`Filter changed: ${type} - ${value}`);
    };

    return (
        <div className={className}>
            <div className="flex flex-col h-full">
                <div className="flex-1 space-y-6 pb-20">
                    <div>
                        <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-2">Filters</h3>
                        <p className="text-sm text-slate-500 mb-4">Refine your search results.</p>
                    </div>

                    <Accordion type="multiple" defaultValue={["price", "roadAccess", "view"]}>
                        {/* ... Accordion Items ... */}

                        <AccordionItem value="price" className="border-b-0">
                            <AccordionTrigger className="hover:no-underline py-3">Price Range</AccordionTrigger>
                            <AccordionContent>
                                <div className="pt-4 px-2">
                                    <Slider defaultValue={[1000000, 5000000]} max={10000000} step={100000} className="my-4" />
                                    <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                                        <span>Rp 1jt</span>
                                        <span>Rp 10jt+</span>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="roadAccess" className="border-b-0">
                            <AccordionTrigger className="hover:no-underline py-3">Road Access</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-3 pt-1">
                                    {["Bus Big", "Small Car Only", "Steep Terrain"].map((access) => (
                                        <div key={access} className="flex items-center space-x-3">
                                            <Checkbox id={`access-${access}`} onCheckedChange={() => handleFilterChange("roadAccess", access)} />
                                            <Label htmlFor={`access-${access}`} className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                                {access}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="view" className="border-b-0">
                            <AccordionTrigger className="hover:no-underline py-3">View Type</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-3 pt-1">
                                    {["Mountain View", "City Light", "Tea Garden", "Pool View"].map((view) => (
                                        <div key={view} className="flex items-center space-x-3">
                                            <Checkbox id={`view-${view}`} onCheckedChange={() => handleFilterChange("view", view)} />
                                            <Label htmlFor={`view-${view}`} className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                                {view}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="facilities" className="border-b-0">
                            <AccordionTrigger className="hover:no-underline py-3">Facilities</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-3 pt-1">
                                    {["Private Pool", "Warm Water Pool", "Karaoke", "BBQ Tool", "Wifi", "Kitchen"].map((fac) => (
                                        <div key={fac} className="flex items-center space-x-3">
                                            <Checkbox id={`fac-${fac}`} onCheckedChange={() => handleFilterChange("facilities", fac)} />
                                            <Label htmlFor={`fac-${fac}`} className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                                {fac}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* Sticky Action Buttons */}
                <div className="sticky bottom-0 left-0 right-0 bg-white pt-4 pb-2 border-t border-slate-100 mt-auto z-10">
                    <div className="flex gap-3">
                        <Button className="flex-1 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900" variant="outline">Reset</Button>
                        <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-700/20 shadow-lg">Apply</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
