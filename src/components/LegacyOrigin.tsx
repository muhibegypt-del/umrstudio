"use client";
import { motion } from "framer-motion"; // For potential future animations
import BlurReveal from "./BlurReveal";
import Image from "next/image";

export default function LegacyOrigin() {
    return (
        <section id="legacy" className="flex items-center justify-center py-16">
            <div className="w-full max-w-[90%] md:max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">

                {/* 1. The Evidence (Image) - Occupies middle-left (Cols 2-5) */}
                {/* It sits like a passport photo on a large table */}
                <div className="md:col-start-2 md:col-span-4 relative aspect-[4/5] w-full max-w-[320px] mx-auto md:mx-0 bg-ink/5 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full h-full relative"
                    >
                        <Image
                            src="/images/student-with-lawh.jpg"
                            alt="The Student"
                            fill
                            sizes="(max-width: 768px) 90vw, 33vw"
                            className="object-cover grayscale contrast-125 opacity-100 mix-blend-multiply"
                        />
                        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
                    </motion.div>

                    {/* Caption */}
                    <div className="absolute -bottom-6 left-0 flex items-center gap-2 opacity-60">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-ink">
                            Fig. 04 — The Student
                        </span>
                        <div className="h-[1px] w-8 bg-ink/40" />
                    </div>
                </div>

                {/* 2. The Testimony (Text) - Occupies right (Cols 7-11) */}
                {/* High luxury, high whitespace. */}
                <div className="md:col-start-7 md:col-span-4 flex flex-col justify-center mt-12 md:mt-24">
                    <BlurReveal delay={0.2} duration={1.2}>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-oxblood mb-6 block">
                            Why Now
                        </span>
                    </BlurReveal>

                    <BlurReveal delay={0.4} duration={1.2}>
                        <h2 className="font-serif text-2xl md:text-3xl leading-relaxed italic text-ink/90 mb-10">
                            "Time is short. After the passing of my brother Latif, I realized the weight of the clock. This studio is not a business; it is a legacy project."
                        </h2>
                    </BlurReveal>

                    <div className="flex flex-col gap-4 border-l border-ink/20 pl-6">
                        <BlurReveal delay={0.6} duration={1.2}>
                            <p className="font-display text-sm md:text-base leading-loose opacity-70 max-w-sm">
                                A vessel to leave behind good work for generations to come. Without platforms like this, the scholarship and wisdom our ummah needs may not reach the people who need it most.
                            </p>
                        </BlurReveal>

                        <BlurReveal delay={0.7} duration={1.2}>
                            <p className="font-display text-sm md:text-base leading-loose opacity-70 max-w-sm mt-2">
                                We don't have the luxury of waiting.
                            </p>
                        </BlurReveal>

                        <BlurReveal delay={0.8} duration={1.2} className="mt-6">
                            <span className="font-display text-lg italic block">
                                — UMR
                            </span>
                        </BlurReveal>
                    </div>
                </div>

            </div>
        </section>
    );
}
