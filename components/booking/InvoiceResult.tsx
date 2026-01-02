"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, Share2, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";

interface InvoiceResultProps {
    bookingId: string;
    villaName: string;
    location: string;
    checkIn: Date;
    checkOut: Date;
    guests: number;
    nights: number;
    pricePerNight: number;
    serviceFee: number;
    totalPrice: number;
    onClose: () => void;
}

export function InvoiceResult({
    bookingId,
    villaName,
    location,
    checkIn,
    checkOut,
    guests,
    nights,
    pricePerNight,
    serviceFee,
    totalPrice,
    onClose
}: InvoiceResultProps) {
    const invoiceRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        window.print();
    };

    const handleShare = async () => {
        const shareData = {
            title: `Invoice #${bookingId}`,
            text: `Invoice for booking at ${villaName}. Total: Rp ${totalPrice.toLocaleString("id-ID")}`,
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log("Error sharing:", err);
            }
        } else {
            navigator.clipboard.writeText(`Invoice #${bookingId} | ${villaName} | Rp ${totalPrice.toLocaleString("id-ID")}`);
            alert("Invoice summary copied to clipboard.");
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
            {/* Success Message (Screen Only) */}
            <div className="mb-8 flex flex-col items-center text-center print:hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-4 shadow-xl shadow-slate-200">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-serif text-slate-900">Booking Confirmed</h2>
                <p className="text-slate-500 text-sm mt-1">Thank you for your business. Here is your invoice.</p>
            </div>

            {/* Classic Invoice Paper */}
            <div
                id="printable-invoice"
                ref={invoiceRef}
                className="w-full bg-white p-8 md:p-12 shadow-2xl border border-slate-100 print:shadow-none print:border-0 print:p-0 print:w-full print:absolute print:inset-0 print:m-0"
            >
                {/* Header */}
                <div className="flex justify-between items-start border-b-2 border-slate-900 pb-8 mb-8">
                    <div>
                        <h1 className="text-4xl font-serif text-slate-900 tracking-tight">INVOICE</h1>
                        <p className="text-sm font-medium text-slate-500 mt-2 uppercase tracking-widest">#{bookingId}</p>
                    </div>
                    <div className="text-right">
                        <h3 className="text-xl font-bold text-slate-900">Antivilla Inc.</h3>
                        <p className="text-sm text-slate-500 mt-1">Puncak, Bogor<br />West Java, Indonesia</p>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-12 mb-12">
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Bill To</h4>
                        <p className="text-lg font-bold text-slate-900">Guest</p>
                        <p className="text-slate-600 mt-1">Payment Method: Credit Card</p>
                        <p className="text-slate-600">{format(new Date(), "MMMM dd, yyyy")}</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Booking Details</h4>
                        <p className="font-bold text-slate-900">{villaName}</p>
                        <p className="text-slate-600 text-sm mt-1">{location}</p>
                        <div className="mt-4 flex gap-4 text-sm text-slate-600">
                            <div>
                                <span className="block text-xs font-bold text-slate-400 uppercase">Check In</span>
                                {format(checkIn, "MMM dd, yyyy")}
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-slate-400 uppercase">Check Out</span>
                                {format(checkOut, "MMM dd, yyyy")}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Line Items */}
                <table className="w-full mb-8">
                    <thead>
                        <tr className="border-b border-slate-200">
                            <th className="text-left font-bold text-slate-900 py-3 text-sm uppercase tracking-wider">Description</th>
                            <th className="text-right font-bold text-slate-900 py-3 text-sm uppercase tracking-wider">Rate</th>
                            <th className="text-right font-bold text-slate-900 py-3 text-sm uppercase tracking-wider">Qty</th>
                            <th className="text-right font-bold text-slate-900 py-3 text-sm uppercase tracking-wider">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-700">
                        <tr className="border-b border-slate-100">
                            <td className="py-4">Accommodation ({nights} nights)</td>
                            <td className="text-right py-4 font-mono">Rp {pricePerNight.toLocaleString("id-ID")}</td>
                            <td className="text-right py-4 font-mono">{nights}</td>
                            <td className="text-right py-4 font-mono font-medium text-slate-900">Rp {(pricePerNight * nights).toLocaleString("id-ID")}</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                            <td className="py-4">Platform Service Fee</td>
                            <td className="text-right py-4 font-mono">Rp {serviceFee.toLocaleString("id-ID")}</td>
                            <td className="text-right py-4 font-mono">1</td>
                            <td className="text-right py-4 font-mono font-medium text-slate-900">Rp {serviceFee.toLocaleString("id-ID")}</td>
                        </tr>
                    </tbody>
                </table>

                {/* Totals */}
                <div className="flex justify-end">
                    <div className="w-1/2 md:w-1/3 space-y-3">
                        <div className="flex justify-between text-sm text-slate-500">
                            <span>Subtotal</span>
                            <span className="font-mono">Rp {((pricePerNight * nights) + serviceFee).toLocaleString("id-ID")}</span>
                        </div>
                        <div className="flex justify-between text-sm text-slate-500">
                            <span>Tax (0%)</span>
                            <span className="font-mono">Rp 0</span>
                        </div>
                        <div className="border-t-2 border-slate-900 pt-3 flex justify-between items-baseline">
                            <span className="font-bold text-slate-900 text-lg">Total</span>
                            <span className="font-mono font-bold text-slate-900 text-xl">Rp {totalPrice.toLocaleString("id-ID")}</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs">
                    <p>Antivilla Inc. • Puncak, Indonesia • support@antivilla.com</p>
                    <p className="mt-1">Generated on {format(new Date(), "PPpp")}</p>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 w-full mt-8 print:hidden">
                <Button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white rounded-none h-12 text-lg font-medium" onClick={handlePrint}>
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                </Button>
                <Button variant="outline" className="flex-1 border-slate-300 rounded-none h-12 text-lg font-medium hover:bg-slate-50" onClick={handleShare}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Invoice
                </Button>
            </div>

            <Button variant="ghost" className="mt-4 text-slate-400 hover:text-slate-900 print:hidden" onClick={onClose}>
                Close
            </Button>

            <style jsx global>{`
                @media print {
                    /* Hide everything in the body by default */
                    body > * {
                        visibility: hidden; 
                    }
                    
                    /* Show only the invoice container */
                    /* We need to ensure the parent of #printable-invoice allows it to be seen */
                    /* Actually, a safer way is to move it out of the tree visually */
                    
                    #printable-invoice {
                        visibility: visible !important;
                        position: fixed !important;
                        left: 0 !important;
                        top: 0 !important;
                        width: 100% !important;
                        height: 100% !important;
                        z-index: 99999 !important;
                        background: white !important;
                        padding: 40px !important; /* Proper margin for print */
                        border: none !important;
                        box-shadow: none !important;
                        margin: 0 !important;
                    }

                    /* Ensure background graphics (like borders/fills) are printed */
                    * {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                }
            `}</style>
        </div>
    );
}
