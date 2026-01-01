import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-90">
                    <span className="text-2xl font-bold tracking-tighter text-emerald-900">Antivilla.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors">
                        Home
                    </Link>
                    <Link href="/search" className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors">
                        Explore
                    </Link>
                    <Link href="#" className="text-sm font-medium text-slate-500 hover:text-emerald-700 transition-colors">
                        Stories
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    <Button variant="ghost" className="hidden md:flex font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50">
                        Log In
                    </Button>
                    <Button className="rounded-full bg-emerald-700 px-6 hover:bg-emerald-800 shadow-md shadow-emerald-700/20 font-semibold">
                        Sign Up
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden text-slate-700">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
