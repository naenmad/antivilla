"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

interface BookingSidebarProps {
    pricePerNight: number;
}

export function BookingSidebar({ pricePerNight }: BookingSidebarProps) {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const serviceFee = 50000;
    const total = pricePerNight + serviceFee;

    return (
        <Card className="shadow-lg border-slate-200 sticky top-24">
            <CardHeader>
                <CardTitle className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-emerald-700">Rp {pricePerNight.toLocaleString("id-ID")}</span>
                    <span className="text-sm font-normal text-slate-500">/ night</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Dates</label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={"w-full justify-start text-left font-normal"}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="grid gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Guests</label>
                    <input
                        type="number"
                        min={1}
                        defaultValue={1}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>

                <Separator />

                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Rp {pricePerNight.toLocaleString("id-ID")} x 1 night</span>
                        <span>Rp {pricePerNight.toLocaleString("id-ID")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Service Fee</span>
                        <span>Rp {serviceFee.toLocaleString("id-ID")}</span>
                    </div>
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>Rp {total.toLocaleString("id-ID")}</span>
                </div>

            </CardContent>
            <CardFooter>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6">Book Now</Button>
            </CardFooter>
        </Card>
    );
}
