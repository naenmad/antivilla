import Link from "next/link";
import { Search, HelpCircle, FileText, MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HelpCenterPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="bg-slate-900 py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-slate-900/0" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        How can we help you?
                    </h1>
                    <div className="max-w-2xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                            className="w-full h-14 pl-12 rounded-full bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:bg-white/20 focus:border-white/30 transition-all"
                            placeholder="Search for answers..."
                        />
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                            <FileText className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Booking Basics</h3>
                        <p className="text-slate-500 mb-6">Learn how to book a villa, manage dates, and understand our policies.</p>
                        <Link href="/help-center/booking" className="text-emerald-600 font-semibold flex items-center hover:text-emerald-700">
                            Read articles <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                            <MessageCircle className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Host Communication</h3>
                        <p className="text-slate-500 mb-6">Tips on messaging hosts, asking questions, and resolving issues.</p>
                        <Link href="/help-center/communication" className="text-emerald-600 font-semibold flex items-center hover:text-emerald-700">
                            Read articles <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                            <HelpCircle className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Account & Safety</h3>
                        <p className="text-slate-500 mb-6">Manage your profile, security settings, and payment methods.</p>
                        <Link href="/help-center/account" className="text-emerald-600 font-semibold flex items-center hover:text-emerald-700">
                            Read articles <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {[
                        "How do I cancel my booking?",
                        "Is it safe to pay through AntiVilla?",
                        "What if the villa is different from the photos?",
                        "How do I contact support?",
                    ].map((question, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between group">
                            <span className="font-medium text-slate-700 group-hover:text-emerald-700">{question}</span>
                            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-1" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-slate-900 py-16 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Still need help?</h2>
                    <p className="text-slate-400 mb-8">Our support team is available 24/7 to assist you.</p>
                    <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8">
                        <Link href="/contact">Contact Support</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
