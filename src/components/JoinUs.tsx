"use client";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";

export default function JoinUs() {
    return (
        <section id="support" className="relative w-full py-16 md:py-28">
            {/* Top border */}
            <div className="w-full h-[1px] bg-ink/10 mb-12 md:mb-16" />

            <div className="max-w-2xl mx-auto text-center px-6">
                {/* Label */}
                <BlurReveal>
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#6E0D25] mb-8 block opacity-80">
                        Join Us
                    </span>
                </BlurReveal>

                {/* Main message */}
                <BlurReveal delay={0.1}>
                    <p className="font-garamond italic text-2xl md:text-4xl leading-snug text-ink/90 mb-6">
                        Your support helps us produce this content.
                    </p>
                </BlurReveal>

                <BlurReveal delay={0.2}>
                    <p className="font-display text-sm md:text-base leading-loose opacity-60 max-w-lg mx-auto mb-10">
                        But more importantly, engaging with and sharing this content consistently helps strengthen our collective understanding of the deen.
                    </p>
                </BlurReveal>

                {/* The Action - Added Clarity Button */}
                <BlurReveal delay={0.25}>
                    <button className="px-10 py-4 bg-ink text-paper font-mono text-[10px] tracking-[0.2em] uppercase hover:bg-[#6E0D25] transition-colors duration-500 mb-12 cursor-pointer shadow-lg">
                        Support the Studio
                    </button>
                </BlurReveal>

                {/* Decorative seal element */}
                <BlurReveal delay={0.3}>
                    <div className="flex flex-col items-center gap-4">
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="w-[1px] h-12 bg-ink/20 origin-top"
                        />
                        <span className="font-mono text-[9px] tracking-[0.4em] uppercase opacity-30">
                            For the Ummah
                        </span>
                    </div>
                </BlurReveal>
            </div>
        </section>
    );
}
