import Link from "next/link";
import { DecorativeCircles } from "@/components/shared/BackgroundPatterns";

export function Footer() {
    return (
        <footer className="relative w-full border-t border-slate-200 bg-slate-50/80 pt-16 pb-8 overflow-hidden">
            <DecorativeCircles className="inset-0 z-0 opacity-50 pointer-events-none" />
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-1 space-y-4">
                        <span className="text-2xl font-extrabold text-emerald-900 tracking-tighter">Antivilla.</span>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                            The trusted marketplace for Puncak villas. Verified listings, transparent road access info, and no-zonk guarantee.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Explore</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/search" className="hover:text-emerald-600 transition-colors">Search Villas</Link></li>
                            <li><Link href="/#" className="hover:text-emerald-600 transition-colors">Featured Categories</Link></li>
                            <li><Link href="/#" className="hover:text-emerald-600 transition-colors">New Arrivals</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link href="/help-center" className="hover:text-emerald-600 transition-colors">Help Center</Link></li>
                            <li><Link href="/terms" className="hover:text-emerald-600 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Stay Connected</h4>
                        <p className="text-sm text-slate-500 mb-4">Follow us for the latest updates and hidden gems.</p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <div className="w-8 h-8 rounded-full bg-slate-200 hover:bg-emerald-100 cursor-pointer transition-colors"></div>
                            <div className="w-8 h-8 rounded-full bg-slate-200 hover:bg-emerald-100 cursor-pointer transition-colors"></div>
                            <div className="w-8 h-8 rounded-full bg-slate-200 hover:bg-emerald-100 cursor-pointer transition-colors"></div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400 font-medium">
                        &copy; {new Date().getFullYear()} Antivilla. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500 font-medium">
                        <Link href="/#" className="hover:text-slate-900">Sitemap</Link>
                        <Link href="/#" className="hover:text-slate-900">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
