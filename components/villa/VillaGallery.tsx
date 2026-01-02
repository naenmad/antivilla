"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VillaGalleryProps {
    images: string[];
}

export function VillaGallery({ images }: VillaGalleryProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Bento Grid Display (max 5)
    // Layout: 1 big (left), 4 small (right)
    return (
        <>
            {/* Main Grid */}
            <div className="relative rounded-2xl overflow-hidden mb-12 h-[300px] md:h-[450px] shadow-sm ring-1 ring-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-full">
                    {/* Hero Image */}
                    <div
                        className="col-span-1 md:col-span-2 row-span-2 relative cursor-pointer group"
                        onClick={() => openLightbox(0)}
                    >
                        <Image
                            src={images[0]}
                            alt="Main view"
                            fill
                            className="object-cover group-hover:brightness-95 transition-all duration-300"
                            priority
                        />
                    </div>

                    {/* Secondary Images */}
                    {images.slice(1, 5).map((img, idx) => (
                        <div
                            key={idx + 1}
                            className={`relative cursor-pointer group ${idx > 1 ? "hidden md:block" : ""}`}
                            onClick={() => openLightbox(idx + 1)}
                        >
                            <Image
                                src={img}
                                alt={`View ${idx + 2}`}
                                fill
                                className="object-cover group-hover:brightness-95 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* Show All Photos Button */}
                <div className="absolute bottom-4 right-4">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/90 hover:bg-white text-slate-900 shadow-md backdrop-blur-sm gap-2"
                        onClick={() => openLightbox(0)}
                    >
                        <Grid className="w-4 h-4" />
                        Show all photos
                    </Button>
                </div>
            </div>

            {/* Lightbox Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white hover:bg-white/10 rounded-full h-12 w-12"
                        onClick={() => setIsOpen(false)}
                    >
                        <X className="w-6 h-6" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 rounded-full h-12 w-12 hidden md:flex"
                        onClick={prevImage}
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 rounded-full h-12 w-12 hidden md:flex"
                        onClick={nextImage}
                    >
                        <ChevronRight className="w-8 h-8" />
                    </Button>

                    <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] animate-in fade-in zoom-in duration-300">
                        <Image
                            src={images[currentIndex]}
                            alt={`Gallery view ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                        <div className="absolute bottom-[-40px] left-0 right-0 text-center text-white/70 text-sm">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
