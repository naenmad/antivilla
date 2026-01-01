import { Hero } from "@/components/home/Hero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { VillaCard } from "@/components/shared/VillaCard";
import { villas } from "@/data/villas";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Take first 3 verified villas
  const featuredVillas = villas.filter(v => v.isVerified).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedCategories />

      <section className="py-20 bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Verified Picks for You</h2>
              <p className="text-slate-500 text-lg">Highest rated villas with checked path conditions.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50" asChild>
              <Link href="/search">
                View all <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVillas.map((villa) => (
              <VillaCard key={villa.id} villa={villa} />
            ))}
          </div>

          <div className="mt-12 md:hidden flex justify-center">
            <Button variant="outline" className="w-full h-12 border-slate-300 text-slate-700 font-medium" asChild>
              <Link href="/search">
                View all <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
