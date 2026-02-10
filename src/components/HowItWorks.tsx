"use client";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";

const steps = [
    {
        numeral: "01",
        title: "You Support",
        description: "Monthly or one-time donations from our community fund every production.",
    },
    {
        numeral: "02",
        title: "We Produce",
        description: "Professional content featuring qualified scholars, made with excellence.",
    },
    {
        numeral: "03",
        title: "We Distribute",
        description: "Content goes out across every platform to reach the widest possible audience.",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative w-full py-16 md:py-28">
            {/* Section Label */}
            <BlurReveal>
                <div className="border-b border-ink/10 pb-4 mb-12 md:mb-16 flex justify-between items-end px-1">
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-40">
                        The Ask
                    </span>
                    <span className="font-mono text-[9px] opacity-20">
                        Support the Studio
                    </span>
                </div>
            </BlurReveal>

            <BlurReveal>
                <h2 className="font-display text-3xl md:text-5xl mb-12 md:mb-16 max-w-3xl leading-tight">
                    Community-Funded <br /> From Day One.
                </h2>
            </BlurReveal>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16 md:mb-20">
                <div className="md:col-start-1 md:col-span-8">
                    <div className="flex flex-col gap-10 md:gap-12">
                        {steps.map((step, index) => (
                            <BlurReveal key={step.numeral} delay={index * 0.1}>
                                <motion.div
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    className="group grid grid-cols-12 gap-4 items-baseline"
                                >
                                    {/* Numeral */}
                                    <div className="col-span-2 md:col-span-1">
                                        <span className="font-mono text-[11px] tracking-widest text-[#6E0D25]/60 group-hover:text-[#6E0D25] transition-colors duration-500">
                                            {step.numeral}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="col-span-10 md:col-span-11">
                                        <motion.h3
                                            variants={{
                                                rest: { x: 0 },
                                                hover: { x: 8 }
                                            }}
                                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                            className="font-display text-lg md:text-2xl tracking-[0.05em] text-ink/90 mb-2"
                                        >
                                            {step.title}
                                        </motion.h3>
                                        <p className="font-display text-sm md:text-base leading-loose opacity-50 max-w-lg">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Hover line */}
                                    <motion.div
                                        className="col-span-12 h-[1px] bg-ink/10 mt-3"
                                        variants={{
                                            rest: { scaleX: 0, originX: 0 },
                                            hover: { scaleX: 1 }
                                        }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                </motion.div>
                            </BlurReveal>
                        ))}
                    </div>
                </div>
            </div>

            {/* Vision Statement & Ask */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-start-5 md:col-span-7 flex flex-col items-start gap-8">
                    <BlurReveal>
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6E0D25] mb-2 block opacity-80">
                            The Commitment
                        </span>
                    </BlurReveal>

                    <BlurReveal delay={0.1}>
                        <p className="font-garamond italic text-xl md:text-2xl leading-relaxed text-ink/90">
                            No ads. No sponsors. No outside influence shaping the message. This studio runs on donations from people like you.
                        </p>
                    </BlurReveal>

                    <BlurReveal delay={0.2} className="w-full flex flex-col md:flex-row gap-4 items-start md:items-center mt-4">
                        <button className="px-12 py-5 bg-ink text-paper font-mono text-sm tracking-[0.2em] uppercase hover:bg-oxblood transition-colors duration-500 w-full md:w-auto min-w-[300px] cursor-pointer shadow-2xl">
                            Donate Monthly
                        </button>

                        <button className="px-8 py-5 border border-ink/20 text-ink font-mono text-xs tracking-[0.2em] uppercase hover:bg-ink/5 transition-colors duration-500 w-full md:w-auto">
                            One-Time Donation
                        </button>
                    </BlurReveal>

                    <BlurReveal delay={0.3}>
                        <p className="font-display text-sm leading-relaxed opacity-60 max-w-lg mt-6 border-l border-ink/20 pl-4">
                            Not ready to donate? <span className="text-ink decoration-1 underline underline-offset-4 cursor-pointer">Sharing our content</span> helps just as much. Every share strengthens our collective understanding of the deen.
                        </p>
                    </BlurReveal>
                </div>
            </div>
        </section>
    );
}
