"use client";
import { motion } from "framer-motion";

const works = [
    { id: "01", category: "THE CYCLES", date: "Recurring / Multi-Scholar", desc: "Ramadan quality. Every moon. A monthly curriculum from the inheritors." },
    { id: "02", category: "THE PRESERVATION", date: "Recitation / Audio-Visual", desc: "The Uncreated Word. In High Fidelity. Recitation captured with Ihsan." },
    { id: "03", category: "THE BRIDGE", date: "Documentary / On Location", desc: "Mauritania. Fez. Bradford. Breaking the distance between the seeker and the scholar." },
    { id: "04", category: "THE REMINDER", date: "Poetry & Reflection", desc: "Art as a Weapon. The war for the soul is fought through the eye." },
];

export default function WorksIndex() {
    return (
        <section id="works" className="min-h-screen py-32 w-full">
            <div className="border-b border-ink/10 pb-4 mb-8 flex justify-between items-end">
                <h2 className="font-mono text-[10px] tracking-widest uppercase">Index of Works</h2>
                <span className="font-mono text-[10px] opacity-40">2026 — PRESENT</span>
            </div>

            <div className="flex flex-col">
                {works.map((item) => (
                    <WorkItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}

function WorkItem({ item }: { item: { id: string; category: string; date: string; desc: string } }) {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="group relative grid grid-cols-1 md:grid-cols-12 py-8 border-b border-ink/5 cursor-pointer hover:bg-stone/5 transition-colors"
        >
            {/* ID (Col 1-2) */}
            <div className="col-span-1 md:col-span-2 flex items-start">
                <span className="font-mono text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">/{item.id}</span>
            </div>

            {/* Main Title (Col 3-8) */}
            <div className="col-span-1 md:col-span-6 overflow-hidden">
                <motion.h3
                    variants={{
                        rest: { x: 0, opacity: 0.8 },
                        hover: { x: 10, opacity: 1, fontStyle: "italic" }
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-3xl md:text-5xl text-ink leading-tight"
                >
                    {item.category}
                </motion.h3>
                <motion.p
                    variants={{
                        rest: { height: 0, opacity: 0 },
                        hover: { height: "auto", opacity: 0.6 }
                    }}
                    className="font-display text-sm mt-2 overflow-hidden"
                >
                    {item.desc}
                </motion.p>
            </div>

            {/* Meta (Col 9-12) */}
            <div className="hidden md:flex col-span-4 justify-end items-start group-hover:pr-4 transition-all duration-500">
                <span className="font-mono text-[9px] tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                    {item.date}
                </span>
            </div>
        </motion.div>
    );
}
