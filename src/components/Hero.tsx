"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <section
            id="hero"
            className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden bg-ink mt-4 md:mt-0"
        >
            {/* The Living Ink (Video) */}
            <div className="absolute inset-0 z-0">
                <video
                    src="https://ik.imagekit.io/dzmabcda0/The_frame_the_1080p_202602040231.mp4?updatedAt=1770143546116"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onCanPlay={() => setIsVideoLoaded(true)}
                    className={`w-full h-full object-cover mix-blend-overlay scale-[1.15] transition-opacity duration-1000 ${isVideoLoaded ? "opacity-50" : "opacity-0"
                        }`}
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-ink/20" />
            </div>

            {/* The Statement - Route A (Cinematic Void) */}
            <div className="relative z-10 text-paper mix-blend-difference px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <h1 className="font-garamond italic text-sm md:text-base tracking-[0.3em] leading-none text-center select-none text-paper/90 mix-blend-difference">
                        UMR STUDIOS
                    </h1>
                </motion.div>
            </div>

            {/* Anchors */}
            <div className="absolute top-6 left-6 font-mono text-[10px] opacity-30 text-paper hidden md:block">
                EST. 2026 — MANCHESTER
            </div>

            <div className="absolute bottom-12 right-6 md:right-12 font-mono text-[10px] tracking-widest uppercase writing-vertical-rl rotate-180 opacity-60 text-paper">
                The War For The Soul
            </div>
        </section>
    );
}
