"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <section
            id="hero"
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-ink"
        >
            {/* The Living Ink (Video) - Now pure texture */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={() => setIsVideoLoaded(true)}
                    className="w-full h-full object-cover opacity-30 mix-blend-screen"
                >
                    <source src="https://ik.imagekit.io/dzmabcda0/The_frame_the_1080p_202602040231.mp4?updatedAt=1770143546116" type="video/mp4" />
                </video>
                {/* Grain overlay for texture */}
                <div className="absolute inset-0 bg-ink/20 mix-blend-overlay pointer-events-none" />
            </div>

            {/* The Massive Watermark - Commanding Presence */}
            <div className="relative z-10 text-paper mix-blend-difference select-none pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* The Mark */}
                    <h1
                        className="font-garamond font-light tracking-[0.1em] leading-[0.85] text-center"
                        style={{ fontSize: 'clamp(80px, 25vw, 400px)' }}
                    >
                        UMR
                    </h1>

                    {/* The Whisper */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                        className="font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase mt-8"
                    >
                        STUDIOS
                    </motion.span>

                    {/* The Purpose */}
                    <motion.span
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 0.3, y: 0 }}
                        transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
                        className="font-garamond italic text-xs md:text-sm tracking-[0.15em] mt-6 md:mt-8 text-center max-w-[300px]"
                    >
                        Islamic Media Production for the Ummah
                    </motion.span>

                    {/* CLARITY TEXT: The precise definition */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ duration: 1.5, delay: 2.0, ease: "easeOut" }}
                        className="font-display text-xs md:text-sm leading-relaxed text-center max-w-md mt-6 text-paper/80 mix-blend-difference"
                    >
                        Our scholars deserve world-class platforms.
                        Our ummah deserves deeper content.
                        We're building both.
                        Our scholars deserve world-class platforms.
                        Our ummah deserves deeper content.
                        We're building both.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 1.5, delay: 2.1, ease: "easeOut" }}
                        className="font-display text-[10px] md:text-xs leading-relaxed text-center max-w-md mt-4 text-paper/60 mix-blend-difference"
                    >
                        UMR Studios is a community-funded Islamic media studio based in Manchester.
                        We produce documentaries, podcasts, and lectures with trained scholars — made with ihsan.
                    </motion.p>

                    {/* The Action - New CTA added at user request but kept minimal */}
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 2.2, ease: "easeOut" }}
                        className="mt-12 px-8 py-3 border border-paper/30 text-paper font-mono text-[10px] tracking-[0.2em] uppercase hover:bg-paper hover:text-ink transition-colors duration-500 cursor-pointer pointer-events-auto"
                        onClick={() => document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Start the Journey
                    </motion.button>
                </motion.div>
            </div>

            {/* The Scroll Indicator - Delayed Invitation */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1.5, delay: 2.5, ease: "easeOut" }}
            >
                <motion.div
                    className="w-[1px] bg-paper"
                    initial={{ height: 0 }}
                    animate={{ height: 60 }}
                    transition={{ duration: 1.5, delay: 2.8, ease: "easeOut" }}
                />
            </motion.div>

            {/* Corner Anchors */}
            <motion.div
                className="absolute top-8 left-8 font-mono text-[9px] opacity-0 text-paper hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1.5, delay: 1.5 }}
            >
                EST. 2026
            </motion.div>

            <motion.div
                className="absolute top-8 right-8 font-mono text-[9px] text-paper hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1.5, delay: 1.7 }}
            >
                MANCHESTER
            </motion.div>
        </section>
    );
}
