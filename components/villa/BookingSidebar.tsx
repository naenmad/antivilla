"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { format, differenceInCalendarDays, addDays, isSameDay } from "date-fns";
import { Clock, Users, CheckCircle2 } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { InvoiceResult } from "@/components/booking/InvoiceResult";

interface BookingSidebarProps {
    pricePerNight: number;
    bookedDates?: string[]; // ISO format "YYYY-MM-DD"
    villaName: string;
    location: string;
}

export function BookingSidebar({ pricePerNight, bookedDates = [], villaName, location }: BookingSidebarProps) {
    const [date, setDate] = useState<DateRange | undefined>();
    const [guests, setGuests] = useState(1);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [bookingId, setBookingId] = useState("");

    // Parse booked dates
    const bookedDays = useMemo(() => bookedDates.map(d => new Date(d)), [bookedDates]);

    // Validation: Check if selected range includes disabled dates
    const isRangeValid = useMemo(() => {
        if (!date?.from || !date?.to) return true;

        let curr = date.from;
        while (curr <= date.to) {
            if (bookedDates.includes(format(curr, "yyyy-MM-dd"))) {
                return false;
            }
            curr = addDays(curr, 1);
        }
        return true;
    }, [date, bookedDates]);

    const nights = date?.from && date?.to
        ? differenceInCalendarDays(date.to, date.from)
        : 0;

    const serviceFee = 50000;
    const subtotal = pricePerNight * nights;
    const total = subtotal + serviceFee;

    const handleBooking = () => {
        // Simulate API call
        setTimeout(() => {
            const randomId = "INV-" + Math.floor(Math.random() * 1000000);
            setBookingId(randomId);
            setIsSuccess(true);
        }, 1500);
    };

    return (
        <Card className="shadow-xl border-slate-200 sticky top-24 overflow-hidden rounded-2xl ring-1 ring-slate-100">
            <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                <CardTitle className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-slate-900">Rp {pricePerNight.toLocaleString("id-ID")}</span>
                    <span className="text-sm font-medium text-slate-500">/ night</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 pt-6">

                {/* Custom Inline Calendar */}
                <div className="space-y-3">
                    <div className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide text-slate-500 px-1">
                        <span>Availability</span>
                        <div className="flex gap-3">
                            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-100 ring-2 ring-emerald-500"></div><span className="text-[10px] text-slate-600">Available</span></div>
                            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-rose-100 ring-2 ring-rose-500"></div><span className="text-[10px] text-slate-600">Booked</span></div>
                        </div>
                    </div>

                    <div className="border rounded-xl p-1 shadow-sm">
                        <Calendar
                            mode="range"
                            defaultMonth={new Date()}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={1}
                            disabled={(date) => {
                                const dateString = format(date, "yyyy-MM-dd");
                                return date < new Date(new Date().setHours(0, 0, 0, 0)) || bookedDates.includes(dateString);
                            }}
                            modifiers={{
                                booked: bookedDays,
                                available: (date) => !bookedDates.includes(format(date, "yyyy-MM-dd")) && date >= new Date(new Date().setHours(0, 0, 0, 0))
                            }}
                            modifiersClassNames={{
                                booked: "bg-rose-50 text-rose-300 pointer-events-none line-through decoration-rose-300",
                                available: "bg-emerald-50/50 text-emerald-900 font-medium hover:bg-emerald-100 hover:text-emerald-900"
                            }}
                            className="w-full"
                        />
                    </div>
                    {date?.from && date?.to && !isRangeValid && (
                        <p className="text-xs text-red-600 font-medium px-1">Selected range includes booked dates.</p>
                    )}
                </div>

                {/* Guest Input */}
                <div className="grid gap-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Guests</label>
                    <div className="relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <input
                            type="number"
                            min={1}
                            max={20}
                            value={guests}
                            onChange={(e) => setGuests(parseInt(e.target.value))}
                            className="flex h-10 w-full rounded-md border border-slate-300 bg-background pl-9 pr-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:border-transparent"
                        />
                    </div>
                </div>

                {/* Calculation */}
                {date?.from && date?.to && nights > 0 && isRangeValid && (
                    <div className="space-y-3 pt-2 animate-in fade-in slide-in-from-top-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600 underline decoration-slate-300 decoration-dotted">Rp {pricePerNight.toLocaleString("id-ID")} x {nights} nights</span>
                            <span className="font-medium text-slate-900">Rp {subtotal.toLocaleString("id-ID")}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600 underline decoration-slate-300 decoration-dotted">Service Fee</span>
                            <span className="font-medium text-slate-900">Rp {serviceFee.toLocaleString("id-ID")}</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between font-bold text-lg text-emerald-900">
                            <span>Total</span>
                            <span>Rp {total.toLocaleString("id-ID")}</span>
                        </div>
                    </div>
                )}

            </CardContent>
            <CardFooter>
                <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6 font-bold shadow-lg shadow-emerald-700/20"
                    disabled={!date?.from || !date?.to || !isRangeValid}
                    onClick={() => setIsBookingOpen(true)}
                >
                    {!date?.from ? "Select Dates" : "Book Now"}
                </Button>
            </CardFooter>

            {/* Booking Modal */}
            <Dialog open={isBookingOpen} onOpenChange={(open) => {
                // Prevent closing if showing invoice unless clicking close inside invoice
                if (!open && isSuccess) return;
                setIsBookingOpen(open);
            }}>
                <DialogContent className={isSuccess ? "max-w-md p-0 overflow-hidden border-none shadow-2xl bg-transparent" : ""}>
                    {!isSuccess ? (
                        <>
                            <DialogHeader>
                                <DialogTitle>Confirm your booking</DialogTitle>
                                <DialogDescription>
                                    You are booking this villa for {nights} nights.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Dates</p>
                                        <p className="font-bold text-slate-900">
                                            {date?.from && format(date.from, "MMM dd")} - {date?.to && format(date.to, "MMM dd, yyyy")}
                                        </p>
                                    </div>
                                    <div className="h-8 w-px bg-slate-200"></div>
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Guests</p>
                                        <p className="font-bold text-slate-900">{guests} Guest(s)</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between font-bold text-lg border-t pt-4">
                                        <span>Total to pay</span>
                                        <span className="text-emerald-700">Rp {total.toLocaleString("id-ID")}</span>
                                    </div>
                                    <p className="text-xs text-slate-400">You won't be charged yet.</p>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setIsBookingOpen(false)}>Cancel</Button>
                                <Button
                                    className="bg-emerald-600 hover:bg-emerald-700 min-w-[120px]"
                                    onClick={handleBooking}
                                >
                                    Confirm
                                </Button>
                            </DialogFooter>
                        </>
                    ) : (
                        // Render Invoice Result
                        <div className="bg-white p-6 rounded-2xl">
                            <InvoiceResult
                                bookingId={bookingId}
                                villaName={villaName}
                                location={location}
                                checkIn={date!.from!}
                                checkOut={date!.to!}
                                guests={guests}
                                nights={nights}
                                pricePerNight={pricePerNight}
                                serviceFee={serviceFee}
                                totalPrice={total}
                                onClose={() => {
                                    setIsBookingOpen(false);
                                    setIsSuccess(false);
                                    setDate(undefined);
                                }}
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </Card>
    );
}

