"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CyclesGallery() {
    const cycles = [
        {
            id: "Fig. 01",
            title: "The Cycles",
            type: "Commission",
            thumbnail: "https://img.youtube.com/vi/HJ-AP-orZ1k/maxresdefault.jpg",
            href: "https://www.youtube.com/watch?v=HJ-AP-orZ1k",
            isPlaceholder: false,
        },
        {
            id: "Fig. 02",
            title: "The Preservation",
            type: "Series",
            thumbnail: null,
            href: "#",
            isPlaceholder: true,
        },
        {
            id: "Fig. 03",
            title: "The Bridge",
            type: "Documentary",
            thumbnail: null,
            href: "#",
            isPlaceholder: true,
        },
        {
            id: "Fig. 04",
            title: "The Reminder",
            type: "Reflections",
            thumbnail: null,
            href: "#",
            isPlaceholder: true,
        },
    ];

    return (
        <section className="w-full py-16 border-t border-ink/5">
            {/* Header / Context */}
            <div className="mb-8 flex justify-between items-end px-1">
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-40">
                    Series Index
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
                {cycles.map((cycle, index) => (
                    <Link
                        key={cycle.id}
                        href={cycle.href}
                        target={cycle.isPlaceholder ? "_self" : "_blank"}
                        className={`group block relative flex flex-col gap-4 ${cycle.isPlaceholder ? 'pointer-events-none opacity-40' : ''}`}
                    >
                        {/* Thumbnail / Void Container */}
                        <div className="aspect-[4/3] w-full relative overflow-hidden bg-ink/5 mix-blend-multiply">
                            {cycle.thumbnail ? (
                                <>
                                    <Image
                                        src={cycle.thumbnail}
                                        alt={cycle.title}
                                        fill
                                        className="object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-1000 ease-out"
                                    />
                                    {/* Film Grain Overlay for Thumbnail */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-noise" />
                                </>
                            ) : (
                                /* Placeholder: The Empty Frame */
                                <div className="w-full h-full flex items-center justify-center border border-ink/10">
                                    <div className="w-[1px] h-4 bg-ink/20" />
                                    <div className="h-[1px] w-4 bg-ink/20 absolute" />
                                </div>
                            )}
                        </div>

                        {/* Typography */}
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between items-baseline">
                                <span className="font-mono text-[9px] text-ink/60">
                                    {cycle.id}
                                </span>
                                {!cycle.isPlaceholder && (
                                    <span className="font-mono text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        View
                                    </span>
                                )}
                            </div>
                            <h3 className="font-display text-xl md:text-2xl text-ink leading-none group-hover:italic transition-all duration-300">
                                {cycle.title}
                            </h3>
                            <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 mt-1">
                                {cycle.type}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
