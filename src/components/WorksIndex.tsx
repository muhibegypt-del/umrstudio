"use client";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";

const works = [
    {
        numeral: "I",
        title: "THE CYCLES",
        subtitle: "Not one-off talks — structured, recurring content your community can return to and grow with.",
        description: "RECURRING LECTURE SERIES",
        meta: "In Development / 2026"
    },
    {
        numeral: "II",
        title: "THE PRESERVATION",
        subtitle: "The Quran deserves to be heard in the highest fidelity. Recitation captured with the ihsan it demands.",
        description: "CINEMATIC QURAN RECITATION",
        meta: "In Development / 2026"
    },
    {
        numeral: "III",
        title: "THE BRIDGE",
        subtitle: "Mauritania. Fez. Bradford. Filming with scholars most people will never get access to.",
        description: "DOCUMENTARY SERIES",
        meta: "In Development / 2026"
    },
    {
        numeral: "IV",
        title: "THE REMINDER",
        subtitle: "The war for the soul is fought through the eye. Poetic, visual reflections designed to cut through the noise.",
        description: "SHORT-FORM POETRY & REFLECTION",
        meta: "In Development / 2026"
    },
];

export default function WorksIndex() {
    return (
        <section id="works" className="py-16 md:py-28 w-full">
            {/* Section Header */}
            <BlurReveal>
                <div className="border-b border-ink/10 pb-4 mb-12 flex justify-between items-end">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-40">Here's What We're Building</span>
                    <span className="font-mono text-[9px] opacity-20">Production Plan</span>
                </div>
            </BlurReveal>

            {/* The Folio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
                {works.map((item, index) => (
                    <FolioEntry key={item.numeral} item={item} index={index} />
                ))}
            </div>
        </section>
    );
}

function FolioEntry({ item, index }: { item: typeof works[0]; index: number }) {
    return (
        <BlurReveal delay={index * 0.1}>
            <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group flex flex-col gap-6 cursor-pointer relative"
            >
                {/* Top Border / Meta Line */}
                <div className="w-full h-[1px] bg-ink/10 mb-2 group-hover:bg-ink/30 transition-colors duration-500" />

                <div className="flex justify-between items-baseline">
                    <span className="font-garamond italic text-2xl text-ink/30 group-hover:text-oxblood/60 transition-colors duration-500">
                        {item.numeral}.
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                        {item.meta}
                    </span>
                </div>

                <div className="flex flex-col gap-3">
                    <motion.h3
                        variants={{
                            rest: { x: 0 },
                            hover: { x: 4 }
                        }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-3xl md:text-4xl text-ink/90 group-hover:text-ink transition-colors"
                    >
                        {item.title}
                    </motion.h3>

                    <p className="font-display text-xs tracking-wide opacity-50 max-w-sm text-[#6E0D25] mb-2 uppercase">
                        {item.description}
                    </p>

                    <p className="font-garamond italic text-lg leading-relaxed opacity-60 group-hover:opacity-80 transition-opacity max-w-sm">
                        {item.subtitle}
                    </p>
                </div>
            </motion.div>
        </BlurReveal>
    );
}
