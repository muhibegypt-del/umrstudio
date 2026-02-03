"use client";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";

const works = [
    {
        numeral: "I",
        title: "THE CYCLES",
        subtitle: "On the preservation of knowledge through repetition and ritual.",
        meta: "Recurring / Multi-Scholar"
    },
    {
        numeral: "II",
        title: "THE PRESERVATION",
        subtitle: "The Uncreated Word. In High Fidelity. Recitation captured with Ihsan.",
        meta: "Recitation / Audio-Visual"
    },
    {
        numeral: "III",
        title: "THE BRIDGE",
        subtitle: "Mauritania. Fez. Bradford. Breaking the distance between the seeker and the scholar.",
        meta: "Documentary / On Location"
    },
    {
        numeral: "IV",
        title: "THE REMINDER",
        subtitle: "Art as a Weapon. The war for the soul is fought through the eye.",
        meta: "Poetry & Reflection"
    },
];

export default function WorksIndex() {
    return (
        <section id="works" className="py-32 md:py-48 w-full">
            {/* Section Header */}
            <BlurReveal>
                <div className="border-b border-ink/10 pb-6 mb-16 flex justify-between items-end">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-40">Index of Works</span>
                    <span className="font-mono text-[9px] opacity-20">2026 — Present</span>
                </div>
            </BlurReveal>

            {/* The Folio Entries */}
            <div className="flex flex-col gap-20 md:gap-32">
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
                className="group relative grid grid-cols-12 gap-4 cursor-pointer"
            >
                {/* Roman Numeral - Left Margin */}
                <div className="col-span-2 md:col-span-1">
                    <span className="font-garamond italic text-2xl md:text-3xl text-ink/30 group-hover:text-oxblood/60 transition-colors duration-500">
                        {item.numeral}.
                    </span>
                </div>

                {/* Main Content */}
                <div className="col-span-10 md:col-span-8">
                    <motion.h3
                        variants={{
                            rest: { x: 0 },
                            hover: { x: 12 }
                        }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-2xl md:text-4xl tracking-[0.1em] text-ink/90 group-hover:text-ink transition-colors"
                    >
                        {item.title}
                    </motion.h3>

                    <motion.p
                        variants={{
                            rest: { opacity: 0.5, y: 0 },
                            hover: { opacity: 0.8, y: 4 }
                        }}
                        transition={{ duration: 0.5 }}
                        className="font-garamond italic text-base md:text-lg mt-3 max-w-lg leading-relaxed"
                    >
                        {item.subtitle}
                    </motion.p>
                </div>

                {/* Meta - Right Aligned */}
                <div className="hidden md:flex col-span-3 justify-end items-start pt-2">
                    <motion.span
                        variants={{
                            rest: { opacity: 0.2 },
                            hover: { opacity: 0.6 }
                        }}
                        className="font-mono text-[8px] tracking-[0.2em] uppercase text-right"
                    >
                        {item.meta}
                    </motion.span>
                </div>

                {/* The Hover Line */}
                <motion.div
                    className="absolute -bottom-4 left-0 h-[1px] bg-ink/10"
                    variants={{
                        rest: { width: "0%" },
                        hover: { width: "100%" }
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
            </motion.div>
        </BlurReveal>
    );
}
