"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VisualInterlude() {
    return (
        <section className="relative w-full py-32 flex flex-col gap-12">
            {/* Section Label */}
            <div className="w-full flex justify-between items-end border-b border-ink/10 pb-4 px-1">
                <span className="font-mono text-[9px] tracking-widest uppercase opacity-40">
                    Fig. 03 — The Method
                </span>
                <span className="font-display text-xl italic opacity-80">
                    Structure & Void
                </span>
            </div>

            {/* The Cinema Frame (Zen Garden) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full aspect-[21/9] relative overflow-hidden grayscale contrast-[1.15]"
            >
                <Image
                    src="/images/zen-garden.jpg"
                    alt="Zen Garden Texture"
                    fill
                    className="object-cover hover:scale-[1.02] transition-transform duration-[3s] ease-out"
                />
                {/* Grain Overlay specific to image */}
                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none" />
            </motion.div>

            {/* The Evidence (Supporting Images) & The Poetic Text */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-1 items-start">

                {/* 1. The Poetic Text (Dedicated Component) - Leftmost */}
                <div className="col-span-2 md:col-span-1 flex flex-col justify-end h-full min-h-[150px] pb-4 border-l border-ink/10 pl-4">
                    <p className="font-serif text-lg italic leading-relaxed text-ink/80">
                        "Everything is placed with intention. The silence between the stones is as important as the stones themselves."
                    </p>
                    <span className="font-mono text-[8px] uppercase tracking-widest opacity-40 mt-4">
                        Fig. 03 — Note
                    </span>
                </div>

                {/* Evidence A: Tablets */}
                <div className="col-span-1 relative aspect-[3/4] overflow-hidden grayscale contrast-[1.1] bg-ink/5">
                    <Image
                        src="/images/wooden-tablets-collection.jpg"
                        alt="Wooden Tablets"
                        fill
                        className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                    />
                    <span className="absolute bottom-2 left-2 font-mono text-[8px] uppercase tracking-widest text-paper mix-blend-difference opacity-60">
                        Fig. A
                    </span>
                </div>

                {/* Evidence B: Beads */}
                <div className="col-span-1 relative aspect-[3/4] overflow-hidden grayscale contrast-[1.1] bg-ink/5">
                    <Image
                        src="/images/prayer-beads-hands.jpg"
                        alt="Prayer Beads"
                        fill
                        className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                    />
                    <span className="absolute bottom-2 left-2 font-mono text-[8px] uppercase tracking-widest text-paper mix-blend-difference opacity-60">
                        Fig. B
                    </span>
                </div>

                {/* Evidence C: Gathering */}
                <div className="col-span-1 relative aspect-[3/4] overflow-hidden grayscale contrast-[1.1] bg-ink/5">
                    <Image
                        src="/images/evidence-gathering.jpg"
                        alt="The Gathering"
                        fill
                        className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                    />
                    <span className="absolute bottom-2 left-2 font-mono text-[8px] uppercase tracking-widest text-paper mix-blend-difference opacity-60">
                        Fig. C
                    </span>
                </div>

                {/* Evidence D: Birds */}
                <div className="col-span-1 relative aspect-[3/4] overflow-hidden grayscale contrast-[1.1] bg-ink/5">
                    <Image
                        src="/images/evidence-birds.jpg"
                        alt="Nature Art"
                        fill
                        className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                    />
                    <span className="absolute bottom-2 left-2 font-mono text-[8px] uppercase tracking-widest text-paper mix-blend-difference opacity-60">
                        Fig. D
                    </span>
                </div>
            </div>
        </section>
    );
}
