"use client";
import { motion } from "framer-motion";

interface IhsanQuoteProps {
    quote: string;
    attribution: string;
    reference?: string;
}

export default function IhsanQuote({ quote, attribution, reference }: IhsanQuoteProps) {
    return (
        <section className="relative w-full min-h-[40vh] md:min-h-[50vh] bg-ink flex items-center justify-center overflow-hidden py-16 md:py-20">
            {/* Subtle grain texture */}
            <div className="absolute inset-0 opacity-[0.04]">
                <svg className="h-full w-full">
                    <filter id="ihsanNoise">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.75"
                            numOctaves="4"
                            stitchTiles="stitch"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#ihsanNoise)" />
                </svg>
            </div>

            {/* Decorative vertical lines */}
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-paper/5 to-transparent" />
            <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-paper/5 to-transparent" />

            {/* The Quote */}
            <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 text-center">
                {/* Opening ornament */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 0.2, scaleX: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-24 h-[1px] bg-paper mx-auto mb-8"
                />

                {/* Arabic: الإحسان */}
                <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 0.15, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="block font-serif text-3xl md:text-4xl text-paper mb-6 select-none"
                    dir="rtl"
                >
                    الإحسان
                </motion.span>

                {/* The quote text */}
                <motion.blockquote
                    initial={{ opacity: 0, filter: "blur(5px)", y: 10 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="font-garamond italic text-xl md:text-3xl lg:text-4xl leading-snug md:leading-[1.3] text-paper/90"
                >
                    &ldquo;{quote}&rdquo;
                </motion.blockquote>

                {/* Attribution */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mt-6 md:mt-8 flex flex-col items-center gap-1"
                >
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-paper/40">
                        {attribution}
                    </span>
                    {reference && (
                        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-paper/25">
                            {reference}
                        </span>
                    )}
                </motion.div>

                {/* Closing ornament */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 0.2, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-24 h-[1px] bg-paper mx-auto mt-8"
                />
            </div>
        </section>
    );
}
