import Image from "next/image";

interface VillaGalleryProps {
    images: string[];
}

export function VillaGallery({ images }: VillaGalleryProps) {
    // Use first 5 images max for Bento grid
    const displayImages = images.slice(0, 5);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8">
            {displayImages.map((img, idx) => (
                <div
                    key={idx}
                    className={`relative ${idx === 0
                            ? "col-span-2 row-span-2"
                            : "col-span-1 row-span-1 hidden md:block" // Hide extra images on mobile
                        }`}
                >
                    <Image
                        src={img}
                        alt={`Gallery ${idx}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            ))}
            <div className="md:hidden relative h-full">
                {/* For mobile just show one main image (handled by first child), grid handles others */}
            </div>
        </div>
    );
}
