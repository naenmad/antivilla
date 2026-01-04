"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { DecorativeCircles } from "@/components/shared/BackgroundPatterns";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Explore", href: "/search" },
        { name: "Stories", href: "#" }
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 transition-all duration-300 overflow-hidden">
            <DecorativeCircles className="inset-0 z-0 opacity-40" />
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 group">
                    <span className="text-2xl font-extrabold tracking-tighter text-emerald-900 group-hover:text-emerald-700 transition-colors">Antivilla.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all hover:after:w-full"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="hidden md:flex font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/50" asChild>
                        <Link href="/login">Log In</Link>
                    </Button>
                    <Button className="hidden md:flex rounded-full bg-emerald-600 px-6 py-5 hover:bg-emerald-700 shadow-lg shadow-emerald-700/20 font-bold transition-transform hover:-translate-y-0.5 active:translate-y-0" asChild>
                        <Link href="/signup">Sign Up</Link>
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-slate-700 hover:bg-slate-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "md:hidden fixed inset-x-0 top-20 bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out z-40 overflow-hidden",
                    isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium text-slate-900 hover:text-emerald-600 transition-colors py-2 border-b border-slate-50 last:border-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-100">
                        <Button variant="outline" className="w-full justify-center font-semibold text-slate-700 border-slate-200" asChild>
                            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Log In</Link>
                        </Button>
                        <Button className="w-full justify-center bg-emerald-600 hover:bg-emerald-700 font-bold" asChild>
                            <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
