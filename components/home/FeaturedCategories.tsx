import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Waves, Users } from "lucide-react";

const categories = [
    {
        title: "City Light View",
        icon: Mountain, // Using Mountain as generic for view
        image: "https://images.unsplash.com/photo-1519681393798-3828fb4090bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        slug: "city-light"
    },
    {
        title: "Private Pool",
        icon: Waves,
        image: "https://images.unsplash.com/photo-1576013551627-5cc20eccd41c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        slug: "private-pool"
    },
    {
        title: "Large Group",
        icon: Users,
        image: "https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        slug: "large-group"
    }
];

export function FeaturedCategories() {
    return (
        <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Browse by Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((cat) => (
                    <Link href={`/search?category=${cat.slug}`} key={cat.slug} className="group">
                        <Card className="relative overflow-hidden border-0 text-white h-80 shadow-lg rounded-2xl">
                            <div className="absolute inset-0">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            </div>
                            <CardContent className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex items-center gap-4 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                                        <cat.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">{cat.title}</h3>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}
