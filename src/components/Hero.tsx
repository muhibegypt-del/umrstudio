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
                    src="https://ik.imagekit.io/dzmabcda0/The_frame_the_1080p_202602040231.mp4?updatedAt=1770143546116"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onCanPlay={() => setIsVideoLoaded(true)}
                    className={`w-full h-full object-cover mix-blend-overlay scale-[1.15] transition-opacity duration-[3000ms] ${isVideoLoaded ? "opacity-[0.08]" : "opacity-0"
                        }`}
                />
            </div>

            {/* The Massive Watermark - Commanding Presence */}
            <div className="relative z-10 text-paper mix-blend-difference select-none pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4, ease: "easeOut" }}
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
                        transition={{ duration: 2, delay: 2, ease: "easeOut" }}
                        className="font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase mt-8"
                    >
                        STUDIOS
                    </motion.span>
                </motion.div>
            </div>

            {/* The Scroll Indicator - Delayed Invitation */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2, delay: 4, ease: "easeOut" }}
            >
                <motion.div
                    className="w-[1px] bg-paper"
                    initial={{ height: 0 }}
                    animate={{ height: 60 }}
                    transition={{ duration: 2, delay: 4.5, ease: "easeOut" }}
                />
            </motion.div>

            {/* Corner Anchors */}
            <motion.div
                className="absolute top-8 left-8 font-mono text-[9px] opacity-0 text-paper hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 2, delay: 3 }}
            >
                EST. 2026
            </motion.div>

            <motion.div
                className="absolute top-8 right-8 font-mono text-[9px] text-paper hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 2, delay: 3.2 }}
            >
                MANCHESTER
            </motion.div>
        </section>
    );
}
