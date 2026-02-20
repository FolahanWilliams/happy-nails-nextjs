"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const GALLERY_IMAGES = [
    { id: 28, alt: "Beautiful manicure with pink polish" },
    { id: 29, alt: "Detailed nail art design" },
    { id: 30, alt: "Relaxing pedicure treatment" },
    { id: 31, alt: "Elegant french tip nails" },
    { id: 32, alt: "Vibrant gel colours" },
    { id: 33, alt: "Acrylic extensions with ombré effect" },
    { id: 34, alt: "Close up of perfect cuticles" },
    { id: 35, alt: "Client showing off fresh nails" },
    { id: 36, alt: "Sparkling rhinestone nail art" },
];

export default function Gallery() {
    return (
        <div className="flex flex-col flex-grow bg-white">

            {/* Header */}
            <section className="bg-blush py-20 text-center px-4">
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-textdark mb-6 tracking-tight">Our Work</h1>
                <p className="text-lg text-textdark/70 max-w-2xl mx-auto font-medium">
                    Browse our portfolio of stunning manicures, pedicures, and bespoke nail artistry. Every set is crafted with precision and care.
                </p>
            </section>

            {/* Gallery Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {GALLERY_IMAGES.map((img) => (
                            <Dialog key={img.id}>
                                <DialogTrigger asChild>
                                    <div className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500">
                                        <img
                                            src={`https://picsum.photos/id/${img.id}/800/800`}
                                            alt={img.alt}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />
                                        <div className="absolute inset-0 bg-accentrose/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="text-white font-serif text-lg font-medium drop-shadow-md">View Larger</span>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl p-1 bg-white border-none rounded-xl overflow-hidden box-shadow-2xl">
                                    <div className="relative aspect-square md:aspect-video w-full">
                                        <img
                                            src={`https://picsum.photos/id/${img.id}/1200/800`}
                                            alt={img.alt}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>

                    <div className="mt-16 text-center text-textdark/60 font-medium italic">
                        Want to see more of our daily work? Follow us on Instagram!
                    </div>
                </div>
            </section>

        </div>
    );
}
