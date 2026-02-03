"use client";
import { motion } from "framer-motion";

export default function BigScript() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* 1. Large Kanji: Takumi (Mastery/Artisan) - Bottom Left */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 1 }}
                className="absolute bottom-[-5%] left-[-2%] z-0"
            >
                <span className="font-serif text-[40vw] leading-none opacity-[0.03] text-ink select-none">
                    匠
                </span>
            </motion.div>

            {/* 2. Large Arabic: Al-Qalam (The Pen) - Top Right */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 1.5 }}
                className="absolute top-[-10%] right-[-5%] z-0"
            >
                <span className="font-serif text-[45vw] leading-none opacity-[0.03] text-ink select-none" dir="rtl">
                    القلم
                </span>
            </motion.div>
        </div>
    );
}
